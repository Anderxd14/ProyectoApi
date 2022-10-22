'use strict';
const {UserSchema, USER_TABLE} = require('../models/user.model');
const {PlantaSchema, PLANTA_TABLE} = require('../models/planta.model');
const {SensorSchema, SENSOR_TABLE} = require('../models/sensor.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE,UserSchema);
    await queryInterface.createTable(PLANTA_TABLE,PlantaSchema);
    await queryInterface.createTable(SENSOR_TABLE, SensorSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
  }
    
};