const express = require("express");
const userRoutes = require("./routes/users.routes");
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/products.routes");
const purchaseRoutes = require("./routes/purchases.routes");
const telegramRoutes = require("./routes/telegram.routes");
const createRoles = require("./libs/initialSetup");

const app = express();

createRoles(); //crear roles al iniciar el servidor

app.use(userRoutes);
app.use(authRoutes);
app.use(productRoutes);
app.use(purchaseRoutes);
app.use(telegramRoutes);

module.exports = app;
