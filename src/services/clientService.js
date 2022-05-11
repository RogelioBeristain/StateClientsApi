const db = require("../models");

const Client = db.clients;
const ClientFile = db.clientFiles;
const Op = db.Sequelize.Op;

const createNewClientSv = (res, req) => {
  const clientOriginal = req.body;
  //const {name,...clientMap} = clientOriginal; //uncommmeted if test unfilldata
  const clientMap = clientOriginal;
  saveInDataBaseClientBody(clientMap,res, req);
  
    
   
};

const getInfoClientSv = (clientId, req, res) => {
  Client.findByPk(clientId).then(client => {
    if (client) {
      res.send({
        message: "Tutorial was updated successfully.",
        data: client
      });
    } else {
      res.send({
        message: `y!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Tutorial with "+clientId
    });
  });
 
};

const apovateClientSv = (clientId) => {
  setStateClient(clientId,2);
};

const unaprovateClientSv = (clientId) => {
  setStateClient(clientId,3);
};
  
const getAllClientsSv = () => {
  const allClients = Client.getAllClients();
  return allClients;
};

/**
 * 
 * @param {*Client} clientMap is type Client 
 */

const saveInDataBaseClientBody = (clientMap, res, req)=> {
  Client.create( clientMap )
    .then(data => {
      const message = data;
      saveFilesOfClientInDataBase(data.id, req.files, clientMap.filesNames)
      res.send({message:message, data: clientMap});
    })
    .catch(err => {
      const message = err.message || "Some error occurred while creating the Client."
      
      res.send({message:message, data: clientMap});
    });
}


const saveFilesOfClientInDataBase= (clientId, files, filesNames)=> {
    console.log(files);
    const names = filesNames.split(',');
    files.map(
      (file, index)=>{
        const fileMap = {
          fileName: names[index],
          fileUrl: file.path,
          clientId: clientId
        };
        setStateClient(clientId,1);
        ClientFile.create( fileMap )
          .then(data => {
            const message = data;
          })
          .catch(err => {
            const message = err.message || "Some error occurred while creating the Client."
          });
      }
    );
}


const setStateClient= async (clientId, idStatus)=> {
  const client = await  Client.findByPk(clientId);
  
  client.set({ clientStateId: idStatus });
  await client.save();
}

module.exports = {
  createNewClientSv,
  getInfoClientSv,
  apovateClientSv,
  unaprovateClientSv,
  getAllClientsSv,
};