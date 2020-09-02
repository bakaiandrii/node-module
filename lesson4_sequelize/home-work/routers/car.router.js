const { Router } = require('express');
const carRouter = Router();
const controller = require('../controllers/car.controller');
const { checkCarValidityMidlleware } = require('../midllewares');

module.exports = carRouter;

// create car
carRouter.post('/', checkCarValidityMidlleware ,controller.createCar);
// read all cars
carRouter.get('/', controller.getCars);
// read  cars by id
carRouter.get('/:carId', controller.getCarById);
// update car
carRouter.put('/:carId', controller.updateCarModelById);
//delete car
carRouter.delete('/:carId', controller.delateCarById);
