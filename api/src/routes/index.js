const { Router } = require("express");
const countries = require("./countries");
const activities = require("./activities");
const signup = require("./signup");
const login = require("./login");
const refreshToken = require("./refreshToken");
const userById = require("./userById");
// Importar todos los routers;

// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countries);
router.use("/activities", activities);
router.use("/signup", signup);
router.use("/login", login);
router.use("/refreshToken", refreshToken);
router.use("/user", userById);

module.exports = router;
