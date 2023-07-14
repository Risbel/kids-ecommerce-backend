const { Router } = require("express");
const router = Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/products.controllers");

router.create("/product", createProduct);
router.get("/product", getProducts);
router.update("/product/:id", updateProduct);
router.delete("/product/id", deleteProduct);
router.get("/product/:id", getProduct);
