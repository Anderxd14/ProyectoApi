const {User,UserSchema} = require('./user.model');
const {Planta,PlantaSchema } = require('./planta.model');


function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Planta.init(PlantaSchema, Planta.config(sequelize));
}

module.exports= setupModels;