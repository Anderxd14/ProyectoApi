const {Model,DataTypes,Sequelize} = require('sequelize');


const PLANTA_TABLE = 'plantas';

const PlantaSchema = {
    id:{
        allwoNull: false,
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },

    nameP: {
        allowNull: false,
        type: DataTypes.STRING

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

class Planta extends Model{
    static associate () {

    }
    static config(sequelize){
        return{
            sequelize,
            tableName: PLANTA_TABLE,
            modelName: 'Planta',
            timestamps: false
        }
    }
}

module.exports ={PLANTA_TABLE, PlantaSchema, Planta}