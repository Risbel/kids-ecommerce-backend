const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Purchase = require("./Purchase");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
});

//relacion de uno a muchos:  hasMany + belongsTo
//  un usuario va a 'tener muchas compras', la entidad compras van a tener una llave foranea llamada userId (foreignKey:)
// que se va a referir a la columna id de la tabla usuario (sourceKey:)
//(allowNull: false) permite que la cardinalidad en compras sea 0 o muchas
User.hasMany(Purchase, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
  sourceKey: "id",
});

//La llave foránea "userId" en la entidad "compra"
//hace referencia a la columna "id" en la tabla "usuarios" (targetKey).
Purchase.belongsTo(User, {
  foreignKey: "userId",
  targetKey: "id",
});

module.exports = User;
