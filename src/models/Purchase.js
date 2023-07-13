const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const PurchaseProduct = require("./PurchaseProduct");

const Purchase = sequelize.define(
  "Purchase",
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

Purchase.hasMany(PurchaseProduct, {
  foreignKey: {
    name: "purchaseId",
    allowNull: false, //para que sea una cardinalidad de 1 o muchos
  },
  sourceKey: "id",
});

PurchaseProduct.belongsTo(Purchase, {
  foreignKey: "purchaseId",
  targetKey: "id",
});

module.exports = Purchase;
