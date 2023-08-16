const signup = require("../Controllers/signupController");

const signupHandler = async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const newUser = await signup(name, username, password);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = signupHandler;
