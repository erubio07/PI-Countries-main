const { Router } = require("express");
const {
  getCountriesHandler,
  getCountryById,
} = require("../Handlers/countriesHandler");
// const {
//   getCountriesByName,
//   getAllCountries,
// } = require("../Controllers/countriesController");

const router = Router();

router.get("/", getCountriesHandler);

router.get("/:id", getCountryById);

module.exports = router;
