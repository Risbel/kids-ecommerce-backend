const { Sequelize } = require("sequelize");
const { db } = require("../config");

//new Sequelize(...) crea una instancia de la clase Sequelize y configura la conexión a la db PostgreSQL
const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: "postgres",
});

module.exports = sequelize;
