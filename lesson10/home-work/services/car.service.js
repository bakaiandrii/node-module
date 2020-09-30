const connection = require('../database').getInstance();
const {Op} = require('sequelize');

module.exports = {
    createCar: async (carObject,transaction) => {
        const Car = connection.getModels('Car');
        return Car.create(carObject, {new: true, transaction});
    },
    getCars: async () => {
        const Car = connection.getModels('Car');
        return Car.findAll({});
    },
    getCarById: async (carId) => {
        const Car = connection.getModels('Car');
        return Car.findByPk(carId);
    },
    updateCarModelById: (carId, newModel, transaction) => {
        const Car = connection.getModels('Car');
        return Car.update({model: newModel}, {
            where: {
                id: {
                    [Op.eq]: carId
                }
            },
            transaction
        });
    },
    delateCarById: (carId, transaction) => {
        const Car = connection.getModels('Car');
        return Car.destroy({
            where: {
                id: {
                    [Op.eq]: carId
                }
            },
            transaction
        });
    },

};



