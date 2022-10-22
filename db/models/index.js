const {User,UserSchema} = require('./user.model');
const {Planta,PlantaSchema } = require('./planta.model');
const {Sensor,SensorSchema} = require('./sensor.model');


function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Planta.init(PlantaSchema, Planta.config(sequelize));
    Sensor.init(SensorSchema, Sensor.config(sequelize));
    
}

module.exports= setupModels;