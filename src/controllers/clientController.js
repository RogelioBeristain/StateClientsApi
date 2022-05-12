const { createNew, getInfo, apovate, unaprovate, getAll} = require("../services/clientService");
const { validationResult } = require('express-validator');

const createNewClient = async (req, res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    createNew(res,req);
};

const getInfoClient = (req, res) => {
  getInfo(req.params.clientId, req, res);
};

const apovateClient = (req, res) => {
  apovate(req,res);
};

const unaprovateClient = (req, res) => {
  unaprovate(req, res);
};

const getAllClients = (req, res) => {
  getAll(res);
};

module.exports = {
  createNewClient,
  getInfoClient,
  apovateClient,
  unaprovateClient,
  getAllClients
};