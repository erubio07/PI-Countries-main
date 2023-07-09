const { Router } = require("express");
const {
  getCountriesHandler,
  getCountryById,
  getCountriesActivities,
} = require("../Handlers/countriesHandler");
// const {
//   getCountriesByName,
//   getAllCountries,
// } = require("../Controllers/countriesController");

const router = Router();

router.get("/", getCountriesHandler);

router.get("/:id", getCountryById);

router.get("/activities/:activity", getCountriesActivities);

module.exports = router;
