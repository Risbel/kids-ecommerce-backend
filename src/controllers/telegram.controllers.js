const axios = require("axios");
const { telegram } = require("../config");

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const mensajeTelegram = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const telegramAPIUrl = `https://api.telegram.org/bot${telegram.token}/sendMessage`;

    await axios.post(telegramAPIUrl, {
      chat_id: `${telegram.id}`,
      text: mensajeTelegram,
    });

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  sendMessage,
};
