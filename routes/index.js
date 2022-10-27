const express = require('express');
const plantasRouter = require('./plantasRouter');
const JardineroRouter = require('./jardineroRouter');
const UsersRouter = require('./usersRouter');
const SensorRouter = require('./sensorRouter');
const HumedadRouter = require('./HumedadRouter');
const authRouter = require('./authRouter');
const ProfileRouter = require('./profileRouter');



function routerApi(app){
    const router = express.Router();
    app.use('/Api/v1', router);
    router.use('/Plantas', plantasRouter);
    router.use('/Jardineros',JardineroRouter);
    router.use('/Users', UsersRouter);
    router.use('/Sensores', SensorRouter);
    router.use('/Humedad',HumedadRouter);
    router.use('/auth',authRouter);
    router.use('/Perfil',ProfileRouter);
   
};

module.exports = routerApi;