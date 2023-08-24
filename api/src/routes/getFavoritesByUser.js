const { Router } = require("express");
const { Favorites, Country } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  const { id } = req.body;
  try {
    if (!id) {
      res.status(400).json({ error: "missin id user" });
    }
    const favorites = await Favorites.findAll({
      where: {
        userId: id,
      },
      include: {
        model: Country,
      },
    });
    if (!favorites) {
      res.status(400).json({ error: "no favorites" });
    } else {
      res.status(200).json(favorites);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
