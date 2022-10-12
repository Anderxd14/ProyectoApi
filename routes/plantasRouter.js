const express = require('express');
const PlantasService = require('./../services/plantasService');
const validatorHandler = require('./../middleware/validatorhHandler');
const {createPlanta,getPlanta,updatePlanta} = require('./../schemas/plantaSchemas');
const router = express.Router();
const service = new PlantasService();


router.get('/', async (req, res) => {
    const plantas = await service.find();
    res.json(plantas);
});

router.get('/:id', 
validatorHandler(getPlanta,'params'),
async (req, res , next) => {
    try {
        const { id } = req.params;
        const planta = await service.findone(id);
        res.json(planta);
    } catch (error) {
        next(error)
    }
});


router.post('/',
validatorHandler(createPlanta,'body'),
async (req, res) => {
    const body = req.body;
    const newPlanta = await service.create(body);
    res.status(201).json(newPlanta);
});

router.patch('/:id', 
validatorHandler(getPlanta,'params'),
validatorHandler(createPlanta,'body'),
async (req, res ,next) => {
    
    try {
        const { id } = req.params;
        const body = req.body;
        const planta = await service.update(id, body);
        res.json(planta);

    } catch (error) {
        next(error)

    };


});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);

    } catch (error) {
        next(error)
    }  
});


module.exports = router;