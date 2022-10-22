const {Model,DataTypes,Sequelize} = require('sequelize');

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
    }


}

class Humedad extends Model{
    static associate () {

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