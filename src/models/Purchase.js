const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

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

module.exports = Purchase;
