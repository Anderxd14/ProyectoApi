const Joi = require('joi');

const id = Joi.number().integer();
const model = Joi.string().min(3).max(20);
const Descrip = Joi.string().max(250);


const createSensor = Joi.object({
    model: model.required(),
    Descrip: Descrip,

});


const  updateSensor = Joi.object({
    model: model,
    Descrip: Descrip,

});


const getSensor = Joi.object({
    id: id.required(),
    
})

module.exports = {createSensor,getSensor,updateSensor}