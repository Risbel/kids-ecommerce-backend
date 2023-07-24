const { Router } = require("express");
const { sendMessage } = require("../controllers/telegram.controllers");

const router = Router();

router.post("/send-message", sendMessage);

module.exports = router;
