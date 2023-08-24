const { Router } = require("express");
const countries = require("./countries");
const activities = require("./activities");
const signup = require("./signup");
const login = require("./login");
const refreshToken = require("./refreshToken");
const userById = require("./userById");
const addFavorites = require("./addFavorites");
const getFavoritesByUser = require("./getFavoritesByUser");
const deleteFavorites = require("./deleteFavorites");
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
router.use("/favorites", addFavorites);
router.use("/favorites", getFavoritesByUser);
router.use("/favorites", deleteFavorites);

module.exports = router;
