const boom = require ('@hapi/boom');
const { Association } = require('sequelize');
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

    async findOne(id){
        const regHumedad = await models.Humedad.findByPk(id);
        if(!regHumedad){
            throw boom.notFound('Registro Humedad no definido')
        }
        return regHumedad;
    }
    
    async findHumedadPlanta(Plantaid) {
        const Humedades = await models.Humedad.findAll({
            where:{
                'Planta_id': Plantaid
            }
        });
        return Humedades

    }
    
}

module.exports = humedadService;