const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const PurchaseProduct = sequelize.define(
  "PurchaseProduct",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
  },
  {
    updatedAt: false,
  }
);

module.exports = PurchaseProduct;
