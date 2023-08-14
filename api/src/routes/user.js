const { Router } = require("express");
const { singUp } = require("../Controllers/singup");

const router = Router();

router.post("/", async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const newUser = await singUp(name, username, password);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
