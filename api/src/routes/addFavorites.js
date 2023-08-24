const { Router } = require("express");
const { User, Country, Favorites } = require("../db");
const { Sequelize } = require("sequelize");

const router = Router();

router.post("/", async (req, res) => {
  const { userId } = req.body;
  const { countryId } = req.body;
  try {
    if (!userId || !countryId) {
      return res.status(400).json({ error: "Missing data" });
    }
    const user = await User.findByPk(userId);
    const country = await Country.findByPk(countryId);
    const newFavorite = await Favorites.create();
    await newFavorite.setUser(user);
    await newFavorite.setCountry(country);
    res.status(200).json({ message: "Added to favorites" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
