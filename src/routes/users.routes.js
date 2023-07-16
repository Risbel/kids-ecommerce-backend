const { Router } = require("express"); //funcion
const router = Router(); //creo una instancia
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUser,
  getUserPurchases,
  getUserPurchasesProducts,
} = require("../controllers/users.controllers");

router.post("/user", createUser);
router.get("/user", getUsers);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/user/:id", getUser);
router.get("/user/:id/purchase", getUserPurchases);
router.get("/user/:id/purchasedProducts", getUserPurchasesProducts);

module.exports = router;
