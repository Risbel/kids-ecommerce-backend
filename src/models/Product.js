const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const PurchaseProduct = require("./PurchaseProduct");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
});

Product.hasMany(PurchaseProduct, {
  foreignKey: {
    name: "productId",
    allowNull: false,
  },
  sourceKey: "id",
});

PurchaseProduct.belongsTo(Product, {
  foreignKey: "productId",
  targetKey: "id",
});

module.exports = Product;
