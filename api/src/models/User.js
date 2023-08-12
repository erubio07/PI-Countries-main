const { DataTypes, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        reqired: true,
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
    user.beforeCreate(async (user, options) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    }),
    user.beforeUpdate(async (user, options) => {
      if (user.changed("password")) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
      }
    })
  );
};
