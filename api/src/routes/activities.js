const { Router } = require("express");

const {
  getActivities,
  postActivity,
  activityById,
  putActivity,
  delActivity,
} = require("../Handlers/activitiesHandler");

const router = Router();

router.get("/", getActivities);

router.get("/:id", activityById);

router.put("/:id", putActivity);

router.post("/", postActivity);

router.delete("/:id", delActivity);

module.exports = router;
