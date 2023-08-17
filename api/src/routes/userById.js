const { Router } = require("express");
const { User } = require("../db");

const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const user = await User.findByPk(id);
      return res.status(200).json(user);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
