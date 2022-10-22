const express = require('express');
const SensorService = require('./../services/sensoresServie');
const validatorHandler = require('./../middleware/validatorhHandler');
const { createSensor, getSensor, updateSensor } = require('./../schemas/sensorSchemas');
const router = express.Router();
const service = new SensorService();

router.get('/', async (req, res, next) => {
    try {
        const sensor = await service.find();
        res.json(sensor);
    } catch (error) {

        next(error);
    }
});



router.get('/:id',
    validatorHandler(getSensor, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const sensor = await service.findOne(id);
            res.json(sensor);
        } catch (error) {
            next(error)
        }
    });

router.post('/',
    validatorHandler(createSensor, 'body'),
    async (req, res) => {
        const body = req.body;
        const newSensor = await service.create(body);
        res.status(201).json(newSensor);
    });

router.patch('/:id',
    validatorHandler(getSensor, 'params'),
    validatorHandler(updateSensor, 'body'),
    async (req, res, next) => {

        try {
            const { id } = req.params;
            const body = req.body;
            const sensor = await service.update(id, body);
            res.json(sensor);

        } catch (error) {
            next(error)

        };

    
});

router.delete('/:id', 
validatorHandler(getSensor,'params'),
async (req, res, next) => {
    try {
        const { id } = req.params;
        await service.delete(id);
        res.status(201).json({id});

    } catch (error) {
        next(error)
    }
});

module.exports = router;



