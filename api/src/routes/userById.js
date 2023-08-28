const { Router } = require("express");
const userHandler = require("../Handlers/userHandler");

const router = Router();

router.post("/", userHandler);

module.exports = router;
