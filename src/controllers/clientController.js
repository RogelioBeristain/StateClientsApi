const {createNewClientSv, getInfoClientSv, apovateClientSv, unaprovateClientSv, getAllClientsSv} = require("../services/clientService");
const { validationResult } = require('express-validator');

const createNewClient = async (req, res) => {
  

  const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const createdclient =  createNewClientSv(res,req);

};

const getInfoClient = (req, res) => {
  const createdclient = getInfoClientSv(req.params.clientId, req, res);
  //res.send({message:"getInfoClient"});
};

const apovateClient = (req, res) => {
  const createdclient = apovateClientSv();
  res.send({message:"apovateClient"});
};

const unaprovateClient = (req, res) => {
  const createdclient = unaprovateClientSv();
  res.send({message:"unaprovateClient"});
};

const getAllClients = (req, res) => {
  const createdclient = getAllClientsSv();
  res.send({message:"getAllClients"});
};

module.exports = {
  createNewClient,
  getInfoClient,
  apovateClient,
  unaprovateClient,
  getAllClients
};