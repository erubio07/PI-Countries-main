const { Country, Activity } = require("../db");
const { Sequelize, Op } = require("sequelize");

const getCountriesByName = async (name) => {
  const country = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  if (country.length > 0) return country;
  else return "No hay paises para el nombre indicado";
};

const getAllCountries = async () => {
  const countries = await Country.findAll();
  return countries;
};

const getCountryId = async (id) => {
  const country = await Country.findByPk(id, {
    include: [
      {
        model: Activity,
      },
    ],
  });
  return country;
};

// crea un funcion que busque los paises por actividad

const getCountriesByActivities = async (activity) => {
  const countries = await Country.findAll({
    include: [
      {
        model: Activity,
        where: {
          name: activity,
        },
      },
    ],
  });
  return countries;

  // try {
  //   const countries = await Country.findAll({
  //     include: [
  //       {
  //         model: Activity,
  //       },
  //     ],
  //   });

  //   let data = countries.filter((c) => {
  //     let validation = false;
  //     c.activities.forEach((x) => {
  //       if (x.name === activity) {
  //         validation = true;
  //       }
  //     });
  //     if (validation === true) return true;
  //     return false;
  //   });
  //   return data;
  //   // return countries;
  // } catch (error) {
  //   return error.message;
  // }
};

module.exports = {
  getCountriesByName,
  getAllCountries,
  getCountryId,
  getCountriesByActivities,
};
