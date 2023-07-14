const { Router } = require("express"); //funcion
const router = Router(); //creo una instancia
const { createUser, getUsers, updateUser, deleteUser, getUser } = require("../controllers/users.controllers");

router.post("/user", createUser);
router.get("/user", getUsers);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/user/:id", getUser);

module.exports = router;
