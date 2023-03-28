const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { restart } = require('nodemon');

const { models } = require('./../libs/conexionSequelize')

class UsersService {

  constructor() {


  }
  async create(data) {
    const hash = await bcrypt.hash(data.password,10);
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll({
      include:['jardinero']
    });
    rta.forEach(user =>{
      delete user.dataValues.password;
      delete user.dataValues.recoveryToken;
    })
    return rta;
  }

  async findbyEmail(email) {
    const rta = await models.User.findOne({
      where: {email}
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('Usuario no definido')
    }
    delete user.dataValues.password
    delete user.dataValues.recoveryToken;
    return user;
  }


  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    delete rta.dataValues.password
    delete rta.dataValues.recoveryToken
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return true;
  }

}

module.exports = UsersService;