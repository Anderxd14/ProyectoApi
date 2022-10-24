const express = require('express');
const jardineroService = require('../services/jardineroService');
const validatorhHandler = require('../middleware/validatorhHandler');
const {getJardineroSchema, createJardineroSchema, updateJardineroSchema}= require('../schemas/jardineroSchemas');
const router = express.Router();

const service = new jardineroService();


router.get('/',  async (req, res, next) => {
    try {
      res.json(await service.find());
    } catch (error) {
      next(error);
    }
  });


  router.get('/:id',
  validatorhHandler(getJardineroSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const jardinero = await service.findOne(id);
            res.json(jardinero);
        } catch (error) {
            next(error)
        }
    });
  
    
  router.post('/',
  validatorhHandler(createJardineroSchema, 'body'),
    async (req, res, next) => {
      try {
        const body = req.body;
        res.status(201).json(await service.create(body));
      } catch (error) {
        next(error);
      }
    }
  );
  
  router.patch('/:id',
  validatorhHandler(getJardineroSchema, 'params'),
  validatorhHandler(updateJardineroSchema, 'body'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const body = req.body;
        res.status(201).json(await service.update(id, body));
      } catch (error) {
        next(error);
      }
    }
  );
  
  router.delete('/:id',
  validatorhHandler(getJardineroSchema, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        res.status(200).json(await service.delete(id));
      } catch (error) {
        next(error);
      }
    }
  );
  
  module.exports = router;
