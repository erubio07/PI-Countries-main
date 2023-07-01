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

module.exports = {
  getAllActivities,
  postActivities,
};
