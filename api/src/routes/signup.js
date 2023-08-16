const { Router } = require("express");
const signupHandler = require("../Handlers/signupHandler");

const router = Router();

router.post("/", signupHandler);

module.exports = router;
