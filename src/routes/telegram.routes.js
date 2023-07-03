const { Router } = require("express");
const { sendMessage } = require("../controllers/telegram.controllers");

const router = Router();

router.get("/", (req, res) => {
  const response = "I am the kids-ecommerce database";

  res.send(response);
});
router.post("/send-message", sendMessage);

module.exports = router;
