const {Model,DataTypes,Sequelize} = require('sequelize');

const {USER_TABLE} = require('./user.model');

const JARDINERO_TABLE = 'jardinero';

const jardineroSchema ={
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name',
      },

      phone: {
        allowNull: true,
        type: DataTypes.STRING,
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },

      userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        references: {
          model: USER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }

}
class jardinero extends Model {

    static associate(models) {
      this.belongsTo(models.User, {as: 'users'});

     
      this.hasMany(models.Planta,{
        as: 'Plantas',
        foreignKey: 'jardineroId'
    });
      
    }
  
    static config(sequelize) {
      return {
        sequelize,
        tableName: JARDINERO_TABLE,
        modelName: 'jardinero',
        timestamps: false
      }
    }
  }
  
  module.exports = { jardinero, jardineroSchema, JARDINERO_TABLE };