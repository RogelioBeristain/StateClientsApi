const clientService = require("../services/clientService");

const createNewClient = (req, res) => {
  const createdclient = clientService.createNewClient();
  res.send("Create a new client");
};

const getInfoClient = (req, res) => {
  const createdclient = clientService.getInfoClient();
  res.send("Create a new client");
};

const apovateClient = (req, res) => {
  const createdclient = clientService.apovateClient();
  res.send("Create a new client");
};

const unaprovateClient = (req, res) => {
  const createdclient = clientService.unaprovateClient();
  res.send("Create a new client");
};

const getAllClients = (req, res) => {
  const createdclient = clientService.getAllClients();
  res.send("Create a new client");
};

module.exports = {
  createNewClient,
  getInfoClient,
  apovateClient,
  unaprovateClient,
  getAllClients
};