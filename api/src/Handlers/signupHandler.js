// const signup = require("../Controllers/signupController");
const { User } = require("../db");

const signupHandler = async (req, res) => {
  const { name, username, password } = req.body;
  try {
    if (!name || !username || !password)
      throw Error("name, username and password are required");
    const usernameExist = await User.findOne({
      where: {
        username: username,
      },
    });
    if (usernameExist) {
      res.status(400).json("username already exist");
    } else {
      const newUser = await User.create({
        name,
        username,
        password,
      });
      res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = signupHandler;
