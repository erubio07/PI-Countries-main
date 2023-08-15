const { Router } = require("express");
const login = require("../Controllers/login");

const router = Router();

router.get("/", async (req, res) => {
    const { username, password } = req.body;
    try {
        const loginUser = await login(username, password);
        res.status(200).json(loginUser);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;