const {
  getAllActivities,
  postActivities,
  getActivityById,
  //   updateaActivity
} = require("../Controllers/activitiesController");
const { Country, Activity } = require("../db");

const getActivities = async (req, res) => {
  try {
    const activities = await getAllActivities();
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.messaje });
  }
};

const activityById = async (req, res) => {
  const { id } = req.params;
  try {
    const activity = await getActivityById(id);
    res.status(200).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.messaje });
  }
};

const postActivity = async (req, res) => {
  const { name, dificulty, duration, season, countries } = req.body;
  try {
    const activity = postActivities(
      name,
      dificulty,
      duration,
      season,
      countries
    );
    res.status(200).send("Actividad creada con éxito");
  } catch (error) {
    res.status(400).json({ error: error.messaje });
  }
};

const putActivity = async (req, res) => {
  const { id } = req.params;
  const { name, dificulty, duration, season, countries } = req.body;
  try {
    let activity = await Activity.findByPk(id);
    // console.log(activity);
    // console.log(countries);
    let activityUpdated = await activity.update({
      name,
      dificulty,
      duration,
      season,
      countries,
    });
    await activityUpdated.setCountries(countries);
    res.status(200).send("Actividad actualizada con éxito");
  } catch (error) {
    res.status(400).json({ error: error.messaje });
  }
};

module.exports = { getActivities, postActivity, activityById, putActivity };
