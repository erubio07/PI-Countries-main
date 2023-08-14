const { Router } = require("express");
const { singUp } = require("../Controllers/singup");

const router = Router();

router.post("/", singUp);
