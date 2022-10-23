const {Model,DataTypes,Sequelize} = require('sequelize');


const SENSOR_TABLE = 'sensores';

const SensorSchema = {
    id:{
        allwoNull: false,
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },


    Descrip:{
        type: DataTypes.STRING
    },

    createdAt:{
        allowNull:false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }

}

class Sensor extends Model{
    static associate (models) {
        this.hasMany(models.Humedad,{
            as: 'Humedad',
            foreignKey: 'SensorId'
        });
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: SENSOR_TABLE,
            modelName: 'Sensor',
            timestamps: false
        }
    }
}

module.exports ={SENSOR_TABLE, SensorSchema, Sensor}