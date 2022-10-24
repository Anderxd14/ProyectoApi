'use strict';
const {UserSchema, USER_TABLE} = require('../models/user.model');
const {jardineroSchema, JARDINERO_TABLE} = require('../models/jardinero.model');
const {PlantaSchema, PLANTA_TABLE} = require('../models/planta.model');
const {SensorSchema, SENSOR_TABLE} = require('../models/sensor.model');
const {HuemdadSchema, HUMEDAD_TABLE} = require('../models/humedad.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE,UserSchema);
    await queryInterface.createTable(JARDINERO_TABLE,jardineroSchema);
    await queryInterface.createTable(PLANTA_TABLE,PlantaSchema);
    await queryInterface.createTable(SENSOR_TABLE, SensorSchema);
    await queryInterface.createTable(HUMEDAD_TABLE, HuemdadSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(HUMEDAD_TABLE);
    await queryInterface.dropTable(SENSOR_TABLE);
    await queryInterface.dropTable(PLANTA_TABLE);
    await queryInterface.dropTable(JARDINERO_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  
  }
    
};
