const express = require("express");
const clientController = require("../../controllers/clientController");
const router = express.Router();
var multer = require('multer');

const upload = multer({ dest: 'public/data/uploads' });

router.post("/", upload.array('userphoto'), clientController.createNewClient);

router.get("/info/:clientId", clientController.getInfoClient);

router.patch("aprovate/:clientId", clientController.apovateClient);

router.patch("unaprovate/:clientId", clientController.unaprovateClient);

router.get("/", clientController.getAllClients); 

module.exports = router;