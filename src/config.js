const { config } = require("dotenv"); //importo la funcion
config(); //la ejecuto para cargar mis variables de entorno definidas en un archivo .env en el objeto process.env

module.exports = {
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  },
  telegram: {
    token: process.env.TELEGRAM_TOKEN,
    id: process.env.TELEGRAM_ID,
  },
};
