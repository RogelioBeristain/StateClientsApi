const express = require("express");
const {createNewClient, getInfoClient, apovateClient, unaprovateClient, getAllClients } = require("../../controllers/clientController");
const {isValidInputText} = require("../../middleware/validators.middleware");
const router = express.Router();
var multer = require('multer');

const upload = multer({ dest: 'public/data/uploads' });

router.post("/",
    //middlewares
    upload.array('filesClient'),
    isValidInputText('name', { min: 3 }),
    isValidInputText('firstSurname', { min: 3 }),
    isValidInputText('secondSurname', { min: 3 }),
    isValidInputText('zipCodeAddress', { min: 1 }),
    isValidInputText('streetAddress', { min: 1 }),
    isValidInputText('numberAddress', { min: 1 }),
    isValidInputText('colonyAddress', { min: 1 }),
    isValidInputText('phoneNumber',{ min: 10, max: 10 }),
    isValidInputText('rfc', { min: 9 }),
    //EndMiddleswares
    createNewClient);

router.get("/info/:clientId", getInfoClient);

router.patch("aprovate/:clientId", apovateClient);

router.patch("unaprovate/:clientId", unaprovateClient);

router.get("/", getAllClients); 

module.exports = router;