const { DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const Product = require("./Product.js");

const ProductImage = sequelize.define("ProductImage", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Product.hasMany(ProductImage, {
  foreignKey: {
    name: "productId",
    allowNull: false,
  },
  sourceKey: "id",
});

ProductImage.belongsTo(Product, {
  foreignKey: "productId",
  targetKey: "id",
});

module.exports = ProductImage;
