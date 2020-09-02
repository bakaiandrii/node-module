const connection = require('../database').getInstance();
const {Op} = require('sequelize');
module.exports = {
    // findAll: async () => {
    //     const [cars] = await connection.promise().query('SELECT * FROM cars');
    //     return  cars;
    // }
    findAll: async () => {
        const Car = connection.getModels('Car');
        return Car.findAll({});
    },
    findWithFilter: async () => {
        const Car = connection.getModels('Car');
        return Car.findAll({
            where: {
              price: {
                  [Op.gt]: 7000
              }
            }
        });
    },
    createCar: async (carObject) => {
        const Car = connection.getModels('Car');
        return Car.create(carObject, {new: true});
    }
}
