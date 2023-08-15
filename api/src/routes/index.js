const { Router } = require("express");
const countries = require("./countries");
const activities = require("./activities");
const user = require("./user");
const login = require("./log");
// Importar todos los routers;

// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countries);
router.use("/activities", activities);
router.use("/signup", user);
router.use("/login", login)

module.exports = router;
