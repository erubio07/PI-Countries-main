const { Router } = require("express");
const {
  getAllActivities,
  postActivities,
} = require("../Controllers/activitiesController");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const activities = await getAllActivities();
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.messaje });
  }
});

router.post("/", async (req, res) => {
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
});

module.exports = router;
