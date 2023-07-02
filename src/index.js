const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); //permite analizar automáticamente el cuerpo de las solicitudes en formato JSON y lo hará accesible a través de req.body. Esto permitirá la desestructuración de las propiedades req.body

const telegramRoutes = require("./routes/telegram.routes");
app.use(telegramRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});