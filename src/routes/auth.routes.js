const { Router } = require("express");
const router = Router();
const { getProfile, login, logout, signup } = require("../controllers/auth.controllers");

router.post("/signup", signup);
router.get("/getProfile", getProfile);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
