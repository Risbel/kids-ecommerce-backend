const { Router } = require("express");
const router = Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/products.controllers");
const { verifyToken } = require("../middlewares");

router.post("/product", verifyToken, createProduct);
router.get("/product", getProducts);
router.put("/product/:id", updateProduct);
router.delete("/product/id", deleteProduct);
router.get("/product/:id", getProduct);

module.exports = router;
