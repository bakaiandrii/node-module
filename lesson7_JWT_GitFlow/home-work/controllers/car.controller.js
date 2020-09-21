const {carServise} = require('../services');


module.exports = {
    createCar: async (req, res) => {
        try {
            const {body, user} = req;
            const car = await carServise.createCar({...body, user_id: user.id});
            res.status(201).json(car);
        } catch (e) {
            res.json(e.message);
        }
    },
    getCars: async (req, res) => {
        try {
            const cars = await carServise.getCars();
            res.json(cars);
        } catch (e) {
            res.json(e.message);
        }
    },
    getCarById: async (req, res) => {
        const {carId} = req.params;
        try {
            const car = await carServise.getCarById(carId);
            res.json(car);
        } catch (e) {
            res.json(e.message);
        }
    },
    updateCarModelById: async (req, res) => {
        const {carId} = req.params;
        const newModel = req.body.model;
        try {
            const car = await carServise.updateCarModelById(carId, newModel);
            res.json(car);
        } catch (e) {
            res.json(e.message);
        }
    },
    delateCarById: async (req, res) => {
        const {carId} = req.params;
        try {
            const car = await carServise.delateCarById(carId);
            res.end(`car with id:${carId} is deleted!`);
        } catch (e) {
            res.json(e.message);
        }
    },
}
