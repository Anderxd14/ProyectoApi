
const express = require('express');
const passport = require('passport');
const PlantasService = require('./../services/plantasService');
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

module.exports = router;