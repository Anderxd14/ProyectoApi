const{Model,DataTypes,Sequelize}=require('sequelize');


const USER_TABLE = 'users';

const UserSchema = {
    id:{
        allowNull: false,
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    email:{
        allowNull:false,
        type: DataTypes.STRING,
        unique: true
    },

    password:{
        allowNull:false,
        type: DataTypes.STRING
    },

    recoveryToken:{
        field:'recovery_Token',
        allowNull:true,
        type: DataTypes.STRING
        
    },

    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'Jardinero'
    },


    createdAt:{
        allowNull:false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }

}

class User extends Model{
    static associate(models) {
        this.hasOne(models.jardinero, {
            as: 'jardinero',
            foreignKey: 'userId'
        });
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports ={USER_TABLE, UserSchema, User}