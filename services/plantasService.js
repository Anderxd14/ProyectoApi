const faker = require('faker');
const boom = require('@hapi/boom')


class PlantasService {

    constructor() {
        this.plantas = [];
        this.generate();
    }


    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.plantas.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                Hume: parseInt(faker.commerce.price(), 10),
                isBlock: faker.datatype.boolean(),
            });
        }
    }



    async create(data) {
        const newPlanta = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.plantas.push(newPlanta);
        return newPlanta;
    };

    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.plantas)
            }, 5000);
        });
    };

    async findone(id) {
        const planta = this.plantas.find(item => item.id === id);
        if (! planta) {
            throw boom.notFound('id no definido');
        }
        if (planta.isBlock) {
            throw boom.conflict('planta Bloqueada');
        }
        return planta;
    }

    async update(id, changes) {
        const index = this.plantas.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('id no definido :/')
        }
        const planta = this.plantas[index];
        this.plantas[index] = {
            ...planta,
            ...changes
        };
        return this.plantas[index];
    }

    async delete(id) {
        const index = this.plantas.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('id no definido')
        }

        this.plantas.splice(index, 1);
        return { id };
    }


}

module.exports = PlantasService;