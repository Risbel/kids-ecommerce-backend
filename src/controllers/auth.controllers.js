const { hash, compare } = require("bcryptjs");
const { verify, sign } = require("jsonwebtoken");
const { serialize } = require("cookie");
const User = require("../models/User");
const config = require("../config");
const Role = require("../models/Role");

const signup = async (req, res) => {
  const { name, lastName, email, phone, password, imageUrl } = req.body;

  const hashedPassword = await hash(password, 10);

  const { id: roleId } = await Role.findOne({ name: "user" });

  const newUser = await User.create({
    name,
    lastName,
    email,
    phone,
    imageUrl,
    password: hashedPassword,
    role: roleId,
  });

  const savedUser = await newUser.save();

  const token = sign({ id: savedUser.id }, config.SECRET, {
    expiresIn: 86400,
  });

  res.status(200).json(token);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
    include: [Role],
  });

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  } //(401) no ha sido ejecutada la peticion porque carece de credenciales válidas de autenticación para el recurso solicitado

  const storedHashedPassword = user.password;

  const isPasswordMatch = await compare(password, storedHashedPassword);

  if (!isPasswordMatch) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      id: user.id,
      email: user.email,
      username: user.name,
    },
    config.SECRET
  );

  const serialized = serialize("myTokenName", token, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24 * 30,
    domain: "localhost",
    path: "/",
  });

  res.cookie(serialized);
  res.json("succesfull");
};

const getProfile = (req, res) => {
  try {
    const myToken = req.rawHeaders[29].substring(12); // verify de JWT puede extraer y validar el token JWT almacenado en una cookie
    const user = verify(myToken, config.SECRET);

    res.json(user);
  } catch (error) {
    return res.status(401).json({ error: "invalid token" });
  }
};

const logout = (req, res) => {
  const myToken = req.rawHeaders[29].substring(12);

  if (!myToken) {
    return res.status(401).json({ error: "no token" });
  }

  try {
    verify(myToken, config.SECRET);

    const serialized = serialize("myTokenName", null, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
      maxAge: 0,
      domain: "localhost",
      path: "/",
    });

    res.cookie(serialized);
    res.status(200).json("Logout succesfull");
  } catch (error) {
    return res.status(401).json({ error: "invalid token" });
  }
};

module.exports = { signup, getProfile, login, logout };
