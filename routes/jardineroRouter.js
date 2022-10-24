const express = require('express');
const jardineroService = require('../services/jardineroService');
const validatorhHandler = require('../middleware/validatorhHandler');
const {checkRoles} = require('../middleware/authHandler')
const {getJardineroSchema, createJardineroSchema, updateJardineroSchema}= require('../schemas/jardineroSchemas');
const passport = require('passport');
const router = express.Router();

const service = new jardineroService();


router.get('/', 
passport.authenticate('jwt',{session: false}),
async (req, res, next) => {

  try {
      res.json(await service.find());
    } catch (error) {
      next(error);
    }
  });


  router.get('/:id',
  passport.authenticate('jwt',{session: false}),
  checkRoles('admin','Jardinero'),
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
  passport.authenticate('jwt',{session: false}),
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
  passport.authenticate('jwt',{session: false}),
  checkRoles('admin'),
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
