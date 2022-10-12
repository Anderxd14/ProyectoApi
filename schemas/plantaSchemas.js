const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const Hume = Joi.number().integer().min(10);


const createPlanta = Joi.object({
    name: name.required(),
    Hume: Hume.required(),

});

const  updatePlanta = Joi.object({
    name: name,
    Hume: Hume,

});


const getPlanta = Joi.object({
    id: id.required(),
    
});

module.exports = {createPlanta,getPlanta,updatePlanta}