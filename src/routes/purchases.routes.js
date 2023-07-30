const { Router } = require("express");
const router = Router();

const {
  createPurchase,
  getPurchases,
  getPurchase,
  updatePurchase,
  deletePurchase,
} = require("../controllers/purchases.controllers");
const { verifyToken, isAdmin } = require("../middlewares");

router.post("/purchase", createPurchase);
router.get("/purchase", getPurchases);
router.get("/purchase/:id", getPurchase);
router.put("/purchase/:id", [verifyToken, isAdmin], updatePurchase);
router.delete("/purchase/:id", [verifyToken, isAdmin], deletePurchase);

module.exports = router;
