const { Country, Activity } = require("../db");
const { Sequelize, Op } = require("sequelize");

const fillActivities = async () => {
  try {
    const activity1 = await Activity.create({
      name: "Sky",
      dificulty: "4",
      duration: "4",
      season: "Invierno",
      countryId: ["ARG"],
    });
  } catch (error) {}
};

module.exports = fillActivities;
