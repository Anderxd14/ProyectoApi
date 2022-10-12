const express = require('express');
const plantasRouter = require('./plantasRouter');

function routerApi(app){
    const router = express.Router();
    app.use('/Api/v1', router);
    router.use('/Plantas', plantasRouter);
};

module.exports = routerApi;