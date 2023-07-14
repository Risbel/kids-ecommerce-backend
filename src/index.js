const app = require("./app");
const sequelize = require("./database/database");

require("./models/User.js");
require("./models/Product.js");
require("./models/Purchase.js");
require("./models/ProductImage.js");
require("./models/PurchaseProduct.js");

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
