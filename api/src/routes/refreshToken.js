const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
require("dotenv").config();

const router = Router();

router.post("/", async (req, res) => {
  const { refreshToken } = req.body;
  try {
    if (!refreshToken) {
      return res
        .status(400)
        .json({ message: "no se proporciono el refresktoken" });
    }
    const decodedRefreskToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    // console.log(decodedRefreskToken);
    const user = await User.findByPk(decodedRefreskToken.id);
    console.log(user);
    if (!user) {
      return res.status(400).json({ message: "El usuario no existe" });
    }
    const accessToken = jwt.sign(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
    );
    return res.status(200).json(accessToken);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
