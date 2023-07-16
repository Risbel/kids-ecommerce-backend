const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRoutes = require("./routes/users.routes");
const productRoutes = require("./routes/products.routes");
const purchaseRoutes = require("./routes/purchases.routes");
const telegramRoutes = require("./routes/telegram.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); //permite analizar automáticamente el cuerpo de las solicitudes en formato JSON y lo hará accesible a través de req.body. Esto permitirá la desestructuración de las propiedades req.body

app.use(userRoutes);
app.use(productRoutes);
app.use(purchaseRoutes);
app.use(telegramRoutes);

module.exports = app;
