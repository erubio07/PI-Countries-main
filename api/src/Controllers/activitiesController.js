const { Country, Activity } = require("../db");
const { Sequelize, Op } = require("sequelize");

const getAllActivities = async () => {
  const activities = await Activity.findAll({
    include: [
      {
        model: Country,
      },
    ],
  });
  return activities;
};

const getActivityById = async (id) => {
  const activity = await Activity.findByPk(id, {
    include: [
      {
        model: Country,
      },
    ],
  });
  return activity;
};

const postActivities = async (name, dificulty, duration, season, countries) => {
  if ((name, dificulty, duration, season, countries)) {
    const activity = await Activity.create({
      name,
      dificulty,
      duration,
      season,
      countries,
    });
    await activity.addCountry(countries);
    return activity;
  } else {
    return "Hay campos incompletos";
  }
};

// const updateaActivity = async (
//   name,
//   dificulty,
//   duration,
//   season,
//   countries
// ) => {
//   if ((name, dificulty, duration, season, countries)) {
//     const update = await Activity.update({
//       name,
//       dificulty,
//       duration,
//       season,
//       countries,
//     });
//     await update.addCountry(countries);
//     return update;
//   } else {
//     return "Hay campos incompleto";
//   }
// };

module.exports = {
  getAllActivities,
  postActivities,
  getActivityById,
  // updateaActivity,
};
