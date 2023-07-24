const Role = require("../models/Role");

const createRoles = async () => {
  try {
    const count = await Role.count();

    if (count > 0) return;

    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    return console.error(error);
  }
};

module.exports = createRoles;
