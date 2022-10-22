const boom = require ('@hapi/boom');
const {models} = require ('./../libs/conexionSequelize');

class humedadService {
    constructor()
    {

    }

    async create(data) {
        const newreg = await models.Humedad.create(data);
        return newreg;
    };

    async find(){
        const rta = await models.Humedad.findAll();
        return rta;

    }
}

module.exports = humedadService;