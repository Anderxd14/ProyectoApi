const { required } = require('joi');
const Joi = require('joi');

const id = Joi.number().integer();
const nameP = Joi.string().min(3).max(20);
const Descrip = Joi.string().max(250);
const jardineroId = Joi.number().integer();



const createPlanta = Joi.object({
    nameP: nameP.required(),
    Descrip: Descrip,
    jardineroId: jardineroId.required()

});


const  updatePlanta = Joi.object({
    nameP: nameP,
    Descrip: Descrip,
   
});


const getPlanta = Joi.object({
    id: id.required(),
    
})

module.exports = {createPlanta,getPlanta,updatePlanta}