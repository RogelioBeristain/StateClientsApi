const db = require("../models");

const Client = db.clients;
const ClientFile = db.clientFiles;
const Op = db.Sequelize.Op;
const states = {enviado: 1, aprovado: 2, rechazado: 3};

const createNew = (res, req) => {
  const clientOriginal = req.body;
  //const {name,...clientMap} = clientOriginal; //uncommmeted if test unfilldata
  const clientMap = clientOriginal;
  saveInDataBaseClientBody(clientMap,res, req);
};

const getInfo = (clientId, req, res) => {
  Client.findByPk(clientId).then(client => {
    res.send({
      message: "Client successfully.",
      data: client
    });
  }).catch(err => {
    res.status(500).send({
      message: `Error  ${clientId}`
    });
  });
};

const apovate = (req, res) => {
  setStateClient(req, res, states.aprovado);
};

const unaprovate = (req, res) => {
  setStateClient(req, res, states.rechazado);
};
  
const getAll = (res) => {
  Client.findAll().then(data=> {
    const clientfilter = data.map(client=> {
      return {
        id: client.id,
        name: client.name,
        firstSurname: client.firstSurname,
        secondSurname: client.secondSurname,
        status: client.clientStateId
      }
    })
    res.send({message: data, data: clientfilter});
  }).catch(err => {
    const message = err.message || "Some error."
    res.send({message: message, data: clientMap});
  });
};

/**
 * @param {*Client} clientMap is type Client 
 */
const saveInDataBaseClientBody = (clientMap, res, req)=> {
  Client.create( clientMap ).then(data => {
      saveFilesOfClientInDataBase(data.id, req.files, clientMap.filesNames)
      res.send({message: data, data: clientMap});
    }).catch(err => {
      const message = err.message || "Some error"
      res.send({message:message, data: clientMap});
    });
}

/**
 * @param {*Int} clientId 
 * @param {*FilesObject} files 
 * @param {*String} filesNames 
 */
const saveFilesOfClientInDataBase= (clientId, files, filesNames)=> {
    const names = filesNames.split(',');
    files.map((file, index)=>{
      const fileMap = {
        fileName: names[index],
        fileUrl: file.path,
        clientId: clientId
      };
      ClientFile.create( fileMap ).then(data => {
          res.send({message: data, data: clientMap});
        }).catch(err => {
          const message = err.message || "Some error occurred";
          res.send({message: message, data: clientMap});
      });
    });
}

const setStateClient = async (req, res, idStatus)=> {
  const clientId = req.body.clientId;
  if(clientId){
    const client = await Client.findByPk(clientId);
    client.set({ clientStateId: idStatus });
    await client.save();
  }
  res.send({message:`ok ${clientId}`, data: req.body.clientId});
}

module.exports = {
  createNew,
  getInfo,
  apovate,
  unaprovate,
  getAll,
};