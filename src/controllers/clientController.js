const clientService = require("../services/clientService");
const getAllclients = (req, res) => {
    const allclients = clientService.getAllclients();
    //res.send("Get all clients");
    res.send({ status: "OK", data: allclients });
  };
  
  const getOneclient = (req, res) => {
    const client = clientService.getOneclient();
    res.send("Get an existing client");
  };
  
  const createNewclient = (req, res) => {
    const createdclient = clientService.createNewclient();
    res.send("Create a new client");
  };
  
  const updateOneclient = (req, res) => {
    const updatedclient = clientService.updateOneclient();
    res.send("Update an existing client");
  };
  
  const deleteOneclient = (req, res) => {
    clientService.deleteOneclient();
    res.send("Delete an existing client");
  };
  
  module.exports = {
    getAllclients,
    getOneclient,
    createNewclient,
    updateOneclient,
    deleteOneclient,
  };