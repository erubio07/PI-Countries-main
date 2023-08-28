const getUserByUsername = require("../Controllers/userController");

const userHandler = async (req, res) => {
  const { username } = req.body;
  try {
    if (username) {
      const user = await getUserByUsername(username);
      return res.status(200).json(user);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = userHandler;
