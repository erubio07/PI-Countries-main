// const login = require("../Controllers/loginController");
const { User } = require("../db");
const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET);
};

const loginHandler = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password)
      res.status(400).send("todos los campos son requeridos");
    const user = await User.findOne({
      where: {
        username: username,
      },
    });
    if (user) {
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (passwordCompare) {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        res.status(200).json({
          accessToken: accessToken,
          refreshToken: refreshToken,
          user: {
            id: user.id,
            username: user.username,
            name: user.name,
          },
        });
      } else {
        res.status(400).send("Incorrect Password or Username");
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = loginHandler;
