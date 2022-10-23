const Joi = require('joi');

const id = Joi.number().integer();
const reghumedad = Joi.number();


const createHumedad = Joi.object({
    reghumedad: reghumedad.required(),
    

});

const getHumedad  = Joi.object({
    id: id.required(),
    
})

module.exports = {createHumedad,getHumedad}