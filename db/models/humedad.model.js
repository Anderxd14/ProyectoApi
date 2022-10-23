const {Model,DataTypes,Sequelize} = require('sequelize');
const {SENSOR_TABLE} = require ('./sensor.model')
const {PLANTA_TABLE} = require ('./planta.model')

const HUMEDAD_TABLE ='reg_humedad'; 


const HuemdadSchema ={

    id:{
        allwoNull: false,
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },

    reghumedad:{
        allowNull:false,
        type: DataTypes.DECIMAL,
        field: 'valor_humedad',
    },


    createdAt:{
        allowNull:false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },

    SensorId:{
        field: 'sensor_id',
        allowNull: 'false',
        type: DataTypes.INTEGER,
        references:{
            model: SENSOR_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },

    PlantaId:{
        field: 'Planta_id',
        allowNull: 'false',
        type: DataTypes.INTEGER,
        references:{
            model: PLANTA_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },

}

class Humedad extends Model{
    static associate (models) {
        this.belongsTo(models.Sensor,{as: 'Sensor'});
        this.belongsTo(models.Planta,{as: 'Planta'});
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: HUMEDAD_TABLE,
            modelName: 'Humedad',
            timestamps: false
        }
    }
}

module.exports ={HUMEDAD_TABLE, HuemdadSchema, Humedad}