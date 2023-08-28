const {
  addFavorite,
  deleteFavorite,
  getFavorites,
} = require("../Controllers/favoritesController");

const addFavoriteHandler = async (req, res) => {
  const { userId } = req.body;
  const { countryId } = req.body;
  try {
    if (!userId || !countryId) {
      return res.status(400).json({ error: "Missing data" });
    }
    const newFavorite = await addFavorite(userId, countryId);
    res.status(200).json({ message: "Added to favorites" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFavoriteHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(400).json({ error: "missing id" });
    }
    await deleteFavorite(id);
    res.status(200).json({ message: "favorite deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFavoriteHandler = async (req, res) => {
  const { id } = req.body;
  try {
    if (!id) {
      res.status(400).json({ error: "missin id user" });
    }
    const favorites = await getFavorites(id);
    if (!favorites) {
      res.status(400).json({ error: "no favorites" });
    } else {
      res.status(200).json(favorites);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addFavoriteHandler,
  deleteFavoriteHandler,
  getFavoriteHandler,
};
