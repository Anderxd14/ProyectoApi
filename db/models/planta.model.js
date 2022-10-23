const {Model,DataTypes,Sequelize} = require('sequelize');
const {USER_TABLE} = require ('./user.model')

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
    },

    userId:{
        field: 'user_Id',
        allowNull: 'false',
        type: DataTypes.INTEGER,
        references:{
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }

}

class Planta extends Model{
    static associate (models) {
        this.belongsTo(models.User,{as: 'User'});

        this.hasMany(models.Humedad,{
            as: 'Humedad',
            foreignKey: 'PlantaId'
        });
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