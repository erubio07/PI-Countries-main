const { User, Country, Favorites } = require("../db");
const { Sequelize } = require("sequelize");

const addFavorite = async (userId, countryId) => {
  const user = await User.findByPk(userId);
  const country = await Country.findByPk(countryId);
  const newFavorite = await Favorites.create();
  await newFavorite.setUser(user);
  await newFavorite.setCountry(country);
  return newFavorite;
};

const deleteFavorite = async (id) => {
  await Favorites.destroy({
    where: {
      id: id,
    },
  });
};

const getFavorites = async (id) => {
  const favorites = await Favorites.findAll({
    where: {
      userId: id,
    },
    include: {
      model: Country,
    },
  });
  return favorites;
};

module.exports = { addFavorite, deleteFavorite, getFavorites };
