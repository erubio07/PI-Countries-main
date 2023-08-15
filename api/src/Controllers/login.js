const { User } = require("../db");
const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (username, password) => {
    if (!username || !password) {
        return "Username or Password are required";
    }
    try {
        const usernameExist = await User.findOne({
            where: {
                username: username,
            }
        })
        if (usernameExist) {
            const passwordCompare = await bcrypt.compare(password, usernameExist.password);
            if (passwordCompare) {
                return usernameExist;
            }
        } else {
            return "Incorrect Password or Username";
        }
    } catch (error) {
        error.message;
    }
}

module.exports = login;