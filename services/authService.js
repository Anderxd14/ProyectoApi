const UserService = require('./usersService');
const nodemailer = require('nodemailer');
const service = new UserService();
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const { config } = require('./../config/config');
const bcrypt = require('bcrypt');
const ne = require('faker/lib/locales/ne');

class AuthService {

    async getUser(email, password) {
        const user = await service.findbyEmail(email);
        if (!user) {
            throw boom.unauthorized();
        }
        user.password;
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw boom.unauthorized();
        }
        delete user.dataValues.password;
        return user;
    }

    singnToken(user) {
        const payload = {
            sub: user.id,
            role: user.role
        }
        const token = jwt.sign(payload, config.jwtSecret);
        return ({
            user,
            token
        });

    }

    async sendRecoveryPassword(email) {
      const user = await service.findbyEmail(email);
        if (!user) {
          throw boom.unauthorized();
        }
        const payload ={sub: user.id};
        const token = jwt.sign(payload, config.jwtSecret,{expiresIn: '15min'});
        const link =`http://myfronted.com/recovery?token=${token}`;
       await service.update (user.id, {recoveryToken: token});
        const mail ={
          from: 'steven14.as@gmail.com', // sender address
          to: `${user.email}`, // list of receivers
          subject: "Recuperar contraseña", // Subject line
          html: `<b>Ingresa al link para recuperar la contraseña => ${link} </b>`, // html body
        }
        const rta=await this.sendMail(mail) 
        return rta;
    }

    async changePassword(token,newPassword){
        try {
          const payload=jwt.verify(token,config.jwtSecret);
          const user = await service.findOne(payload.sub);
          if(user.recoveryToken !== token){
            throw boom.unauthorized();
          }
          const hash = await bcrypt.hash(newPassword,10);
          await service.update (user.id, {recoveryToken: null,password:hash});
          return {message:'password cambiado'}
        } catch (error) {
           throw boom.unauthorized();
        }
    }






    
    async sendMail(infoMail) {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          secure: true, // true for 465, false for other ports
          port: 465,
          auth: {
            user: config.spEmail,
            pass: config.spPasswor
          }
        });
        await transporter.sendMail(infoMail);
        return { message: 'mail sent' };
    }
}

module.exports = AuthService;