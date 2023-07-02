const { Router } = require("express");
const { sendMessage } = require("../controllers/telegram.controllers");

const router = Router();

router.post("/order", sendMessage);

module.exports = router;
