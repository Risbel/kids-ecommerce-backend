const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = require("./app");
const sequelize = require("./database/database");

require("./models/User");
require("./models/Role");
require("./models/Product");
require("./models/Purchase");
require("./models/ProductImage");
require("./models/PurchaseProduct");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(
  cors({
    origin: ["https://kids-ecommerce.vercel.app"], // Asegúrate de que el origen coincida con el cliente en el host 3000
    credentials: true, // Habilita las credenciales para permitir el envío de cookies
  })
);

app.use(morgan("dev")); //muestra por consola en modo desarrollo las solicitudes y errores n casos de fallos
app.use(express.json()); //permite analizar el cuerpo de las solicitudes en formato JSON

async function main() {
  try {
    await sequelize.sync({ alter: true, logging: false });

    app.get("/", (req, res) => {
      res.json("hola");
    });
    app.listen(PORT, () => {
      console.log(`Servidor backend escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
