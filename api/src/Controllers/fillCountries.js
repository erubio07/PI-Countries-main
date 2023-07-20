const axios = require("axios");
const { Country } = require("../db");
const countries = require("./countries.json")
// console.log(countries);
const getCountries = async () => {
  // const allCountries = await axios.get(countries);
  //   console.log(allCountries.data);
  const allCountriesData = countries.map((c) => {
    return {
      id: c.cca3,
      name: c.name.common,
      image: c.flags[1],
      continent: c.continents[0],
      capital: c.capital,
      subregion: c.subregion,
      area: c.area,
      population: c.population,
    };
  });
  //   console.log(allCountriesData);
  return allCountriesData;
};

// getCountries();

const saveApiData = async () => {
  const countries = await getCountries();
  await Country.bulkCreate(countries);
};

module.exports = saveApiData;
