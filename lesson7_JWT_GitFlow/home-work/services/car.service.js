const connection = require('../database').getInstance();
const {Op} = require('sequelize');

module.exports = {
    createCar: async (carObject) => {
        const Car = connection.getModels('Car');
        return Car.create(carObject, {new: true});
    },
    getCars: async () => {
        const Car = connection.getModels('Car');
        return Car.findAll({});
    },
    getCarById: async (carId) => {
        const Car = connection.getModels('Car');
        return Car.findByPk(carId);
    },
    updateCarModelById: (carId, newModel) => {
        const Car = connection.getModels('Car');
        return Car.update({model: newModel}, {
            where: {
                id: {
                    [Op.eq]: carId
                }
            }
        });
    },
    delateCarById: (carId) => {
        const Car = connection.getModels('Car');
        return Car.destroy({
            where: {
                id: {
                    [Op.eq]: carId
                }
            }
        });
    },

};



