const { Sequelize } = require("sequelize");
const { db } = require("../config");
const pg = require("pg");

//new Sequelize(...) crea una instancia de la clase Sequelize y configura la conexión a la db PostgreSQL
const sequelize = new Sequelize(db.connectionString, {
  dialectModule: pg,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Add this option if you have issues with self-signed certificates.
    },
  },
});

//config para trabajar en local
// const sequelize = new Sequelize(db.database, db.user, db.password, {
//   host: db.host,

module.exports = sequelize;
