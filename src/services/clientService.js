const Client = require("../database/Client");

const createNewClient = () => {
  return;
};

const getInfoClient = () => {
  return;
};

const apovateClient = () => {
  return;
};

const unaprovateClient = () => {
  return;
};
  
const getAllClients = () => {
  const allClients = Client.getAllClients();
  return allClients;
};

module.exports = {
  createNewClient,
  getInfoClient,
  apovateClient,
  unaprovateClient,
  getAllClients,
};