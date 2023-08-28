const { User } = require("../db");

const getUserByUsername = async (username) => {
  const user = await User.findOne({
    where: {
      username: username,
    },
  });
  return user;
};

module.exports = getUserByUsername;
