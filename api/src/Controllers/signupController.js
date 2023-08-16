const { User } = require("../db");
const { Sequelize } = require("sequelize");

const signup = async (name, username, password) => {
  try {
    const usernameExist = await User.findOne({
      where: {
        username: username,
      },
    });
    if (usernameExist) {
      throw Error("username already exist");
    } else {
      const newUser = await User.create({
        name,
        username,
        password,
      });
      return newUser;
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = signup;
