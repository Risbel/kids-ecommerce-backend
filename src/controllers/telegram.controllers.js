const axios = require("axios");
const { telegram } = require("../config");

const sendMessage = async (req, res) => {
  const { nombre, email, mensaje } = req.body;
  try {
    const mensajeTelegram = `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`;

    const telegramAPIUrl = `https://api.telegram.org/bot${telegram.token}/sendMessage`;

    await axios.post(telegramAPIUrl, {
      chat_id: `${telegram.id}`,
      text: mensajeTelegram,
    });

    console.log("Mensaje enviado a Telegram con éxito");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error al enviar el mensaje a Telegram:", error);
    res.sendStatus(500);
  }
};

module.exports = {
  sendMessage,
};
