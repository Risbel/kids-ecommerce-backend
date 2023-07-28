const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const sequelize = require("./database/database");

require("./models/User");
require("./models/Role");
require("./models/Product");
require("./models/Purchase");
require("./models/ProductImage");
require("./models/PurchaseProduct");

const userRoutes = require("./routes/users.routes");
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/products.routes");
const purchaseRoutes = require("./routes/purchases.routes");
const telegramRoutes = require("./routes/telegram.routes");
const config = require("./config");
const createRoles = require("./libs/initialSetup");

createRoles();

const app = express();
app.use(cookieParser());

app.use(
  cors({
    origin: [config.origin.client], // Asegúrate de que el origen coincida con el cliente en el host 3000
    credentials: true, // Habilita las credenciales para permitir el envío de cookies
  })
);

app.use(morgan("dev")); //muestra por consola en modo desarrollo las solicitudes y errores n casos de fallos
app.use(express.json()); //permite analizar el cuerpo de las solicitudes en formato JSON

app.use(userRoutes);
app.use(authRoutes);
app.use(productRoutes);
app.use(purchaseRoutes);
app.use(telegramRoutes);

const PORT = process.env.PORT || 4000;

async function main() {
  try {
    await sequelize.sync({ alter: true, logging: false });

    app.listen(PORT, () => {
      console.log(`Servidor backend escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
