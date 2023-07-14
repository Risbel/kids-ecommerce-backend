const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { name, lastName, email, phone, imageUrl } = req.body;

    const newUser = await User.create({
      name,
      lastName,
      email,
      phone,
      imageUrl,
    });

    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const Users = await User.findAll();
    res.json(Users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      res.status(404).json({ message: "User does not exist" });
    }

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastName, email, phone, imageUrl } = req.body;

    const user = await User.findByPk(id);
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.phone = phone;
    user.imageUrl = imageUrl;
    await user.save();

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getUsers, updateUser, deleteUser, getUser };
