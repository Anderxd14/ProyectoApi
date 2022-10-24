const {User,UserSchema} = require('./user.model');
const {jardinero,jardineroSchema} = require('./jardinero.model');
const {Planta,PlantaSchema } = require('./planta.model');
const {Sensor,SensorSchema} = require('./sensor.model');
const {Humedad,HuemdadSchema} = require('./humedad.model');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    jardinero.init(jardineroSchema, jardinero.config(sequelize));
    Planta.init(PlantaSchema, Planta.config(sequelize));
    Sensor.init(SensorSchema, Sensor.config(sequelize));
    Humedad.init(HuemdadSchema, Humedad.config(sequelize));
    

    User.associate(sequelize.models);
    jardinero.associate(sequelize.models);
    Planta.associate(sequelize.models);
    Sensor.associate(sequelize.models);
}
module.exports= setupModels;