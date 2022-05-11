const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.clients = require("./client.model.js")(sequelize, Sequelize,DataTypes);
db.clientFiles = require("./clientFile.model.js")(sequelize, Sequelize,DataTypes);
db.ClientSates = require("./clientState.model.js")(sequelize, Sequelize,DataTypes);
//db.ClientSates = require("./user.model.js")(sequelize, Sequelize,DataTypes);
//db.ClientSates = require("./userRole.model.js")(sequelize, Sequelize,DataTypes);

module.exports = db;