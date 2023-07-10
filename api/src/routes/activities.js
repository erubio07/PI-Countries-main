const { Router } = require("express");

const {
  getActivities,
  postActivity,
  activityById,
  putActivity,
} = require("../Handlers/activitiesHandler");

const router = Router();

router.get("/", getActivities);

router.get("/:id", activityById);

router.put("/:id", putActivity);

router.post("/", postActivity);

module.exports = router;
