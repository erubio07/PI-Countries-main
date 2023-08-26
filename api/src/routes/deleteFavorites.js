const { Router } = require("express");
const { Favorites } = require("../db");

const router = Router();

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(400).json({ error: "missing id" });
    }
    await Favorites.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "favorite deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
