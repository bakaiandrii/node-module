const servise = require('../services/car.service');



module.exports = {
    createCar: (req, res) => {
        res.json(servise.createCar(req.body))
    },
    getCars: (req, res) => {
        res.json(servise.getCars());
    },
    getCarById: (req, res) => {
        const {carId} = req.params;
        res.json(servise.getCarById(carId));
    },
    updateCarModelById:(req, res) => {
        const {carId} = req.params;
        const newModel = req.body.model;
        res.json(servise.updateCarModelById(carId,newModel));
    },
    delateCarById:(req, res) => {
        const {carId} = req.params;
        res.json(servise.delateCarById(carId));
    },
}
