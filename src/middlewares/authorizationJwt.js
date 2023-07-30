const { verify } = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");
const Role = require("../models/Role");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.accessToken;

    if (!token) {
      return res.status(403).json({ message: "No token provided" });
    }

    const decoded = verify(token, config.secretSignJwt);

    req.userId = decoded.id; //en el objeto req creo una propiedad llamada userId y le guardo el id del token ya decodificado

    const user = await User.findByPk(req.userId, { password: 0 }); //password: 0 es para no guardar en user el password
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    next(); //para contibuar con la siguiente ruta
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const isAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.userId); //req.userId existe porque en la funcion anterior lo hemos seteado en e objeto req

  const roleId = user.roleId;

  const role = await Role.findByPk(roleId);

  if (role.name === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "This action is reserved just for admin." });
  }
};

const isModerator = async (req, res, next) => {
  const user = await User.findByPk(req.userId); //req.userId existe porque en la funcion anterior lo hemos seteado en e objeto req

  const roleId = user.roleId;

  const role = await Role.findByPk(roleId);

  if (role.name === "moderator" || "admin") {
    next();
  } else {
    return res.status(403).json({ message: "This action is reserved just for moderators and the admin." });
  }
};

module.exports = { verifyToken, isModerator, isAdmin };
