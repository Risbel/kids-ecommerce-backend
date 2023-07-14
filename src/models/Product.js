const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  slug: {
    type: DataTypes.STRING,
  },
  sexOrAge: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.DECIMAL,
    validate: {
      min: 0,
      max: 5,
    },
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

module.exports = Product;
