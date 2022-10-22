const express = require('express');
const plantasRouter = require('./plantasRouter');
const UsersRouter = require('./usersRouter');
const SensorRouter = require('./sensorRouter');
const HumedadRouter = require('./HumedadRouter');


function routerApi(app){
    const router = express.Router();
    app.use('/Api/v1', router);
    router.use('/Plantas', plantasRouter);
    router.use('/Users', UsersRouter);
    router.use('/Sensores', SensorRouter);
    router.use('/Humedad',HumedadRouter);
   
};

module.exports = routerApi;