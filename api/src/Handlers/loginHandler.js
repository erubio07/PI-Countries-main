const login = require("../Controllers/loginController");

const loginHandler = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({erorr: "all fields are required"});
    }
    const user = await login(username, password);
    if (user) {
     return res.status(200).json(user);
    } else {
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = loginHandler;
