const boom = require('@hapi/boom');
const {config} = require('./../config/config')

function checkApi(req,res,next){
    const apiKey = req.headers['api'];
    if (apiKey === config.apiKey) {
        next();
    } else {
        next(boom.unauthorized());
    }
}


module.exports= {checkApi};