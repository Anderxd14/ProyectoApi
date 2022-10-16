const express = require('express');
const router = express.Router();
const validatorHandler = require('./../middleware/validatorhHandler');
const sensorService = require('./../services/sensorService');

const service = new sensorService();

router.get('/', async (req, res, next) => {
    try {
        const sensor = await service.find();
        res.json(sensor);
    } catch (error) {
        next(error);
    }
});


router.get('/:id', async (req, res, next) => {

    try {
        const { id } = req.params;
        const sensor = await service.findOne(id);
        res.json(sensor);
    } catch (error) {
        next(error)
    }


});


router.post('/', async(res,req,next)=>{
    try {
        const body = req.body;
        const newSensor = await service.create(body);
        res.statusCode(201).json(newSensor)
    } catch (error) {
        next(error);     
    }
    
});



router.patch('/:id', async(req,res,next)=>{
    try {
        const {id} = req.params;
        const body = req.body;
        const sensor = await service.update(id, body);
        res.json(sensor);
    } catch (error) {
        next(error);
    }
});



