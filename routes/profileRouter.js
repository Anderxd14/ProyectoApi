
const express = require('express');
const passport = require('passport');
const PlantasService = require('./../services/plantasService');
const humedadService = require('./../services/humedadService');
const Service = new humedadService();
const service = new PlantasService();
const router = express.Router();


router.get('/Misplantas',   
passport.authenticate('jwt',{session: false}),
async (req, res, next )  => {
    try {
        const user = req.user;
        const plantas = await service.findByUser(user.sub);
        res.json(plantas);
       
    } catch (error) {
        next(error)    
    }

});


router.get('/HumedadMisPlantas/:id',
passport.authenticate('jwt',{session: false}),
async(req,res,next)=>{
    try{
        const planta = req.params.id
        const Humedad = await Service.findHumedadPlanta(planta)
        res.json(Humedad);
    }catch(error){
        next(error)
    }

});


module.exports = router;