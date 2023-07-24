const app = require("./app");
const sequelize = require("./database/database");

require("./models/User");
require("./models/Role");
require("./models/Product");
require("./models/Purchase");
require("./models/ProductImage");
require("./models/PurchaseProduct");

const PORT = process.env.PORT || 4000;

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
