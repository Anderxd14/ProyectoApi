'use strict';

const { USER_TABLE } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface,Sequelize) => {
    await queryInterface.addColumn(USER_TABLE,'recovery_Token',{
      field:'recovery_Token',
      allowNull:true,
      type: Sequelize.DataTypes.STRING
      
  })
    
  },

  down: async  (queryInterface) => {
    await queryInterface.removeColumn(USER_TABLE,'recovery_Token');
  }
};
