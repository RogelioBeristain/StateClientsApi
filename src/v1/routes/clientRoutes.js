const express = require("express");
const clientController = require("../../controllers/clientController");
const router = express.Router();
var multer = require('multer');
const { body } = require('express-validator');

const upload = multer({ dest: 'public/data/uploads' });

router.post("/",
    //middlewares
    upload.array('filesClient'),
    isValidInputText('name',3),
    isValidInputText('firstSurname',3),
    isValidInputText('secondSurname',3),
    isValidInputText('zipCodeAddress',1),
    isValidInputText('streetAddress',1),
    isValidInputText('numberAddress',1),
    isValidInputText('colonyAddress',1),
    body('phoneNumber').isLength(({ min: 10, max:10 })),
    body('rfc').isLength(({ min: 9 })),
    //EndMiddleswares
    clientController.createNewClient);

router.get("/info/:clientId", clientController.getInfoClient);

router.patch("aprovate/:clientId", clientController.apovateClient);

router.patch("unaprovate/:clientId", clientController.unaprovateClient);

router.get("/", clientController.getAllClients); 

function isValidInputText(inputName,min = null, max = null) {
    if(min && max) return body(inputName).isLength(({ min: min, max: max })).not().isEmpty().trim().escape();
    else if (min) return body(inputName).isLength(({ min: min })).not().isEmpty().trim().escape();
    else if (max)return body(inputName).isLength(({ max: max })).not().isEmpty().trim().escape();
}

module.exports = router;