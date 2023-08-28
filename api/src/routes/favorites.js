const { Router } = require("express");
const {
  addFavoriteHandler,
  deleteFavoriteHandler,
  getFavoriteHandler,
} = require("../Handlers/favoritesHandler");

const router = Router();

router.post("/", addFavoriteHandler);

router.delete("/:id", deleteFavoriteHandler);

router.post("/get", getFavoriteHandler);

module.exports = router;
