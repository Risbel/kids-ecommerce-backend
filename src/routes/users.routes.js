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
const { verifyToken, isAdmin } = require("../middlewares");

router.post("/user", [verifyToken, isAdmin], createUser);
router.get("/user", [verifyToken, isAdmin], getUsers);
router.put("/user/:id", [verifyToken, isAdmin], updateUser);
router.delete("/user/:id", [verifyToken, isAdmin], deleteUser);
router.get("/user/:id", getUser);
router.get("/user/:id/purchase", getUserPurchases);
router.get("/user/:id/purchasedProducts", getUserPurchasesProducts);

module.exports = router;
