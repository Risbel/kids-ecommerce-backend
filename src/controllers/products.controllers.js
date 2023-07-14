const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    const { name, slug, sexOrAge, rating, description, price, stock } = req.body;

    const newProduct = await Product.create({
      name,
      slug,
      sexOrAge,
      rating,
      description,
      price,
      stock,
    });

    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAll();

    res.json(allProducts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug, sexOrAge, rating, description, price, stock } = req.body;

    const product = await Product.findByPk(id);
    (product.name = name), (product.slug = slug), (product.sexOrAge = sexOrAge), (product.rating = rating);
    product.description = description;
    product.price = price;
    product.stock = stock;
    await product.save;

    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await Product.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({
      where: {
        id,
      },
    });

    if (!product) {
      res.status(404).json({ message: "Product does not exist" });
    }

    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct, getProduct };
