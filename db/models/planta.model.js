const {Model,DataTypes,Sequelize} = require('sequelize');
const {JARDINERO_TABLE} = require ('./jardinero.model')

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

    jardineroId:{
        allowNull: false,
        field: 'jardinero_id',
        type: DataTypes.INTEGER,
        references:{
            model: JARDINERO_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }

}

class Planta extends Model{
    static associate (models) {
        this.belongsTo(models.jardinero,{as: 'jardinero'});

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