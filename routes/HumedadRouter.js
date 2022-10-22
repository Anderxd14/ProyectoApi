const express = require('express');
const humedadService = require('./../services/humedadService');
const validatorHandler = require('./../middleware/validatorhHandler');

const router = express.Router();
const service = new humedadService();

router.get('/', async (req, res, next) => {
    try {

        const regHumedad = await service.find();
        res.json(regHumedad)
    } catch (error) {
        next(error)
    }

});


router.post('/',
    
    async (req, res) => {
        const body = req.body;
        const regHumedad = await service.create(body);
        res.status(201).json(regHumedad);
    });

module.exports = router;