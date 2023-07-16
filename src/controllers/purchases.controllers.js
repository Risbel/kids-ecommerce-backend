const Purchase = require("../models/Purchase");
const PurchaseProduct = require("../models/PurchaseProduct");

const createPurchase = async (req, res) => {
  try {
    const { userId, products } = req.body;

    const newPurchase = await Purchase.create({
      userId,
    });

    const purchaseProducts = products.map((product) => ({
      purchaseId: newPurchase.id,
      productId: product.productId,
      quantity: product.quantity,
    }));

    await PurchaseProduct.bulkCreate(purchaseProducts);

    res.json(newPurchase);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.findAll();
    res.json(purchases);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPurchase = (req, res) => {};
const updatePurchase = (req, res) => {};
const deletePurchase = (req, res) => {};

module.exports = { createPurchase, getPurchase, getPurchases, updatePurchase, deletePurchase };
