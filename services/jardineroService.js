const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const { models } = require('../libs/conexionSequelize');

class jardineroService {
    constructor() {

    }

    async find() {
        const rta = await models.jardinero.findAll({
            include: ['user']
        });

        rta.forEach(jardinero => {
            delete jardinero.user.dataValues.password;
            delete jardinero.user.dataValues.recoveryToken;
            delete jardinero.user.dataValues.password;
            delete jardinero.user.dataValues.recoveryToken;
        });

        return rta;
    }

    async findOne(id) {
        const user = await models.jardinero.findByPk(id);
        if (!user) {
            throw boom.notFound('Jardinero no definido')
        }
        delete user.dataValues.password;
        delete user.dataValues.recoveryToken;
        return user;
    }


    async create(data) {
        const hash = await bcrypt.hash(data.user.password, 10);
        const newData = {
            ...data,
            user: {
                ...data.user,
                password: hash
            }
        }
        const newJardinero = await models.jardinero.create(newData, {
            include: ['user']
        });
        delete newJardinero.dataValues.user.dataValues.password;
        delete newJardinero.dataValues.user.dataValues.recoveryToken;
        return newJardinero;
    }

    async update(id, changes) {
        const model = await this.findOne(id);
        const rta = await model.update(changes);
        return rta;
    }

    async delete(id) {
        const model = await this.findOne(id);
        const rta = await model.destroy();
        return { rta: true };
    }

}

module.exports = jardineroService;
