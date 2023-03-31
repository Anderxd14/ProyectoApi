const express = require('express');
const humedadService = require('./../services/humedadService');
const validatorHandler = require('./../middleware/validatorhHandler');
const passport = require('passport');
const { getHumedad } = require('../schemas/humedadSchemas');
const router = express.Router();
const service = new humedadService();

router.get('/', 
async (req, res, next) => {
    try {
        const regHumedad = await service.find();
        res.json(regHumedad)
    } catch (error) {
        next(error)
    }

});

router.get('/:id',
validatorHandler(getHumedad, 'params'),
async (req,res,next) =>{
    try{
        const{id}= req.params;
        const regHumedad = await service.findOne(id);
        res.json(regHumedad);
    }catch(error){
        next(error);
    }
});


router.post('/',
    async (req, res) => {
        const body = req.body;
        const regHumedad = await service.create(body);
        res.status(201).json(regHumedad);
    });

module.exports = router;