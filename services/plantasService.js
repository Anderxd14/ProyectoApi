const boom = require('@hapi/boom');
const {models}  = require('./../libs/conexionSequelize');


class PlantasService {

    constructor() {
        
    }
     
  
    async create(data) {
        const newPlanta = await models.Planta.create(data);
        return newPlanta;
    };


    async find() {
        const rta = await models.Planta.findAll();
        return rta;
      }
  

      async findOne(id) {
        const planta = await models.Planta.findByPk(id);
        if (!planta) {
          throw boom.notFound('Usuario no definido')
        }
        return planta;
      }

    async update(id, changes) {
        const planta =  await this.findOne(id);
        const rta = await  planta.update(changes);
        return rta;
    }


    async delete(id) {
        const planta =  await this.findOne(id);
        await planta.destroy();
        return{id};

    }
  
}

module.exports = PlantasService;