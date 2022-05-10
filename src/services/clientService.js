// *** ADD ***
const Client = require("../database/Client");
const getAllClients = () => {
    const allClients = Client.getAllClients();
    return allClients;
  };
  
  const getOneClient = () => {
    return;
  };
  
  const createNewClient = () => {
    return;
  };
  
  const updateOneClient = () => {
    return;
  };
  
  const deleteOneClient = () => {
    return;
  };
  module.exports = {
    getAllClients,
    getOneClient,
    createNewClient,
    updateOneClient,
    deleteOneClient,
  };