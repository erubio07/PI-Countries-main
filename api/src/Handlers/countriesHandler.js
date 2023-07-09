const {
  getCountriesByName,
  getAllCountries,
  getCountryId,
  getCountriesByActivities,
} = require("../Controllers/countriesController");

const getCountriesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const country = await getCountriesByName(name);
      res.status(200).json(country);
    } else {
      const countries = await getAllCountries();
      res.status(200).json(countries);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountryById = async (req, res) => {
  const { id } = req.params;
  try {
    const country = await getCountryId(id);
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountriesActivities = async (req, res) => {
  const { activity } = req.params;
  console.log(activity, "msmsmsmsmsmsms");
  try {
    const countries = await getCountriesByActivities(activity);
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountriesHandler,
  getCountryById,
  getCountriesActivities,
};
