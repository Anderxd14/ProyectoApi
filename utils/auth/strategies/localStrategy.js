const { Strategy } = require('passport-local');
const UsersService = require('./../../../services/usersService');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')
const service = new UsersService;


const localStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password',
},
    
    async (email, password, done) => {

    try {
        const user = await service.findbyEmail(email);
        if (!user) {
            done(boom.unauthorized(), false);
        }
        user.password;
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            done(boom.unauthorized(), false);
        }
        delete user.dataValues.password;
        done(null, user);
    } catch (error) {
        done(error, false)
    }

}


);

module.exports = localStrategy;