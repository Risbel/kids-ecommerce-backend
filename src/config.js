const { config } = require("dotenv"); //importo la funcion
config(); //la ejecuto para cargar mis variables de entorno definidas en un archivo .env en el objeto process.env

module.exports = {
  db: {
    connectionString: process.env.POSTGRES_URL + "?sslmode=require", //para produccion
    user: process.env.DB_USER, //de aqui para abajo es para desarrollo
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  },
  telegram: {
    token: process.env.TELEGRAM_TOKEN,
    id: process.env.TELEGRAM_ID,
  },
  origin: {
    client: process.env.URL_ALLOWED_CLIENT,
  },
  secretSignJwt: process.env.SECRET_TOKEN,
};
