const { Router } = require("express");
const loginHandler = require("../Handlers/loginHandler");

const router = Router();

router.post("/", loginHandler);

module.exports = router;
