const { Router } = require("express");
const router = Router();

const {
  createPurchase,
  getPurchases,
  getPurchase,
  updatePurchase,
  deletePurchase,
} = require("../controllers/purchases.controllers");

router.post("/purchase", createPurchase);
router.get("/purchase", getPurchases);
router.get("/purchase/:id", getPurchase);
router.put("/purchase/:id", updatePurchase);
router.delete("/purchase/:id", deletePurchase);

module.exports = router;
