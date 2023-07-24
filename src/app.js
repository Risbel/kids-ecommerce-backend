const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRoutes = require("./routes/users.routes");
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/products.routes");
const purchaseRoutes = require("./routes/purchases.routes");
const telegramRoutes = require("./routes/telegram.routes");
const createRoles = require("./libs/initialSetup");

const app = express();

createRoles(); //crear roles al iniciar el servidor

const PORT = "https://kids-ecommerce.vercel.app" || "http://localhost:3000";

app.use(
  cors({
    origin: ["https://kids-ecommerce.vercel.app"], // Asegúrate de que el origen coincida con el cliente en el host 3000
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

module.exports = app;
