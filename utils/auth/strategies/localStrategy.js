const { Strategy } = require('passport-local');
const authService = require('./../../../services/authService');

const service = new authService;


const localStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password',
},
    
    async (email, password, done) => {
    try {
        const user = await service.getUser(email,password);
        done(null, user);
    } catch (error) {
        done(error, false)
    }
}


);

module.exports = localStrategy;