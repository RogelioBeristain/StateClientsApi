const DB = require("./db.json");

const getAllClients = () => {
  return DB.Clients;
};

module.exports = { getAllClients };