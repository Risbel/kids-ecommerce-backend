const { Router } = require("express");
const router = Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/products.controllers");
const { verifyToken, isModerator } = require("../middlewares");

router.post("/product", [verifyToken, isModerator], createProduct);
router.get("/product", getProducts);
router.put("/product/:id", [verifyToken, isModerator], updateProduct);
router.delete("/product/id", [verifyToken, isModerator], deleteProduct);
router.get("/product/:id", getProduct);

module.exports = router;
