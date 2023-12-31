const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Product = require("./Product");
const Purchase = require("./Purchase");

const PurchaseProduct = sequelize.define(
  "PurchaseProduct",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    purchaseId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: Purchase,
        key: "id",
      },
    },
    productId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    quantity: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
  }
);

module.exports = PurchaseProduct;
