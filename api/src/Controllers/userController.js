const { User } = require("../db");

const getUserByUsername = async (username) => {
  const user = await User.findOne({
    where: {
      username: username,
    },
  });
  return { id: user.id, name: user.name, username: user.username };
};

module.exports = getUserByUsername;
