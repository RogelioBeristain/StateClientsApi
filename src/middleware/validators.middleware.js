const { body, MinMaxOptions } = require('express-validator');

/**
 * @param  {string} inputName is a String 
 * @param {MinMaxOptions} MinMaxOptions of ValidatorExpress { min: number, max: number }
 * @returns ExpressValidator
 */
 const isValidInputText = (inputName, MinMaxOptions)=> {
    return body(inputName).isLength((MinMaxOptions)).not().isEmpty().trim().escape();
 }

 module.exports = { isValidInputText };