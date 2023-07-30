const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const User = require("../models/User");
const config = require("../config");
const Role = require("../models/Role");

const signup = async (req, res) => {
  const { name, lastName, email, phone, imageUrl, password } = req.body;

  try {
    const isNameExist = await User.findOne({ where: { name: name } });
    if (isNameExist) {
      return res.status(409).json({ message: `The name ${name} already exists.` });
    }

    const isEmailExist = await User.findOne({ where: { email: email } });
    if (isEmailExist) {
      return res.status(409).json({ message: `The email ${email} already exists.` });
    }

    const isPhoneExist = await User.findOne({ where: { phone: phone } });
    if (isPhoneExist) {
      return res.status(409).json({ message: `The phone ${phone} already exists.` });
    }

    const hashedPassword = await hash(password, 10);
    const { id: roleId } = await Role.findOne({ where: { name: "user" } });

    const newUser = await User.create({
      name,
      lastName,
      email,
      phone,
      imageUrl,
      password: hashedPassword,
      roleId: roleId,
    });

    const savedUser = await newUser.save();

    const token = sign(
      {
        id: savedUser.id,
        email: savedUser.email,
        username: savedUser.name,
        roleId: savedUser.roleId,
        image: savedUser.imageUrl,
      },
      config.secretSignJwt,
      {
        expiresIn: 86400,
      }
    );

    return res.json({ auth: true, accessToken: token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
      },
      include: [Role],
    });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

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
        role: user.roleId,
        image: user.imageUrl,
      },
      config.secretSignJwt
    );

    res.status(200).json({ login: true, accessToken: token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { signup, login };
