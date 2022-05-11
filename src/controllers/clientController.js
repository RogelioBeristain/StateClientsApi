const clientService = require("../services/clientService");
const { validationResult } = require('express-validator');

const createNewClient = (req, res) => {
  const createdclient = clientService.createNewClient();

  const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send({message:"createNewClient", data:req.body });
};

const getInfoClient = (req, res) => {
  const createdclient = clientService.getInfoClient();
  res.send({message:"getInfoClient"});
};

const apovateClient = (req, res) => {
  const createdclient = clientService.apovateClient();
  res.send({message:"apovateClient"});
};

const unaprovateClient = (req, res) => {
  const createdclient = clientService.unaprovateClient();
  res.send({message:"unaprovateClient"});
};

const getAllClients = (req, res) => {
  const createdclient = clientService.getAllClients();
  res.send({message:"getAllClients"});
};

module.exports = {
  createNewClient,
  getInfoClient,
  apovateClient,
  unaprovateClient,
  getAllClients
};