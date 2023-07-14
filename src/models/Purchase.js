const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Purchase = sequelize.define(
  "Purchase",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  {
    updatedAt: false,
  }
);

module.exports = Purchase;
