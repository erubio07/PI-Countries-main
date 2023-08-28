const { Router } = require("express");
const { User } = require("../db");
const { getUserByUsername } = require("../Controllers/userController");

const router = Router();

router.post("/", async (req, res) => {
  const { username } = req.body;
  try {
    if (username) {
      const user = await User.findOne({
        where: {
          username: username,
        },
      });

      return res
        .status(200)
        .json({ id: user.id, name: user.name, username: user.username });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
