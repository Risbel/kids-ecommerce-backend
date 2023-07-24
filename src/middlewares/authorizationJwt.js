const { verify } = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  try {
    // const myToken = req.rawHeaders[29].substring(12);

    const token = req.headers.mytokenname;

    if (!token) {
      return res.status(403).json({ message: "No token provided" });
    }

    const decoded = verify(token, config.SECRET);
    req.userId = decoded.id; //en el objeto req creo una propiedad llamada userId y le guardo el id del token ya decodificado

    const user = await User.findByPk(req.userId, { password: 0 }); //password: 0 es para no guardar en user el password
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = verifyToken;
