const { User } = require("../db");
const { Sequelize } = require("sequelize");

const singUp = async (name, username, password) => {
  if (!name || !username || password) {
    return "name, username and password are reuired ";
  }
  try {
    const usernameExist = await User.findOne({
      where: {
        username: "username",
      },
    });
    if (usernameExist.length > 0) {
      return "username already exist";
    } else {
      const newUser = await User.create({
        name,
        username,
        password,
      });
    }
    return newUser;
  } catch (error) {
    return error.message;
  }
};

module.exports = singUp;
