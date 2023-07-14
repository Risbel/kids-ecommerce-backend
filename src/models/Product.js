const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sexOrAge: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.DECIMAL,
    validate: {
      min: 0,
      max: 5,
    },
    defaultValue: 0,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Product;
