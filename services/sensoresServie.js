const boom = require('@hapi/boom');
const {models} = require('./../libs/conexionSequelize');

class SensoresService {

    constructor() {
        
    }

    async create(data) {
        const newSensor = await models.Sensor.create(data);
        return newSensor;
    };


    async find() {
      const rta = await models.Sensor.findAll();
      return rta;
    };

      async findOne(id) {
        const sensor = await models.Sensor.findByPk(id);
        if (!sensor) {
          throw boom.notFound('Usuario no definido')
        }
        return sensor;
      }

    async update(id, changes) {
        const sensor =  await this.findOne(id);
        const rta = await  sensor.update(changes);
        return rta;
    }


    async delete(id) {
        const sensor =  await this.findOne(id);
        await sensor.destroy();
        return{id};

    }
  
}

module.exports = SensoresService;