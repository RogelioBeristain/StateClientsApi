const DB = require("./db.json");

const getAllClients = () => {
  return DB.clients;
};

module.exports = { getAllClients };