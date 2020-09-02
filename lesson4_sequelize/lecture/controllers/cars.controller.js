const carService = require('../services/car.service');

module.exports = {
    fetchAll: async (req, res) => {
        try {
            const cars = await carService.findAll();
            res.json(cars);
        } catch (e) {
            res.json(e.message);
        }
    },
    create: async (req, res) => {
        try {
            const car = await carService.createCar(req.body);
            res.status(201).json(car);
        } catch (e) {
            res.json(e.message);
        }
    },
    findWithFilter: async (req, res) => {
        try {
            const car = await carService.findWithFilter();
            res.status(201).json(car);
        } catch (e) {
            res.json(e.message);
        }
    }
};
