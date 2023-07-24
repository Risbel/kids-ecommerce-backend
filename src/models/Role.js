const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const User = require("./User");

const Role = sequelize.define("Role", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Role.hasMany(User, {
  foreignKey: {
    name: "roleId",
  },
  sourceKey: "id",
});

User.belongsTo(Role, {
  foreignKey: "roleId",
  targetKey: "id",
});

module.exports = Role;
