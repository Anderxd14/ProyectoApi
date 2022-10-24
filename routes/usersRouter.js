const express = require('express');
const UserService = require('./../services/usersService');
const validatorHandler = require('./../middleware/validatorhHandler');
const {createUserSchema,updateUserSchema,getUserSchema}= require('./../schemas/userSchemas');
const router = express.Router();
const service = new UserService();



router.get('/', async (req, res, next) => {
    try {
        const Users = await service.find();
        res.json(Users);

    } catch (error) {
        next(error);
    }
});



router.get('/:id',
validatorHandler(getUserSchema, 'params'),
async (req, res, next) => {
    try {
        const { id } = req.params;
        const User = await service.findOne(id);
        res.json(User);
    } catch (error) {
        next(error);
    }
});


router.post('/', 
validatorHandler(createUserSchema, 'body'),
async (req, res, next) => {
    try {
        const body = req.body;
        const newUser = await service.create(body);
        res.json(newUser);
    } catch (error) {
        next(error);
    }
});



router.patch('/:id',
validatorHandler(getUserSchema, 'params'),
validatorHandler(updateUserSchema, 'body'),
 async(req,res,next)=>{
    try {
        const {id}= req.params;
        const body = req.body;
        const user = await service.update(id,body);
        res.json(user);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id',

validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;