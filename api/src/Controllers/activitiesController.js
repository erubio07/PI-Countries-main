const { Country, Activity, User } = require("../db");
const { Sequelize, Op } = require("sequelize");

const getAllActivities = async () => {
  const activities = await Activity.findAll({
    include: {
      model: Country,
    },
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

const getActivityByUser = async (id) => {
  const user = await User.findByPk(id, {
    include: [
      {
        model: Activity,
        include: [Country],
      },
    ],
  });
  console.log(user);
  return user;
};

const postActivities = async (
  name,
  dificulty,
  duration,
  season,
  countries,
  userId
) => {
  if ((name, dificulty, duration, season, countries, userId)) {
    const activity = await Activity.create({
      name,
      dificulty,
      duration,
      season,
      countries,
    });
    await activity.addCountry(countries);
    await activity.setUser(userId);
    return activity;
  } else {
    return "Hay campos incompletos";
  }
};

const deleteActivity = async (id) => {
  await Activity.destroy({
    where: {
      id: id,
    },
  });
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
  deleteActivity,
  getActivityByUser,
};
