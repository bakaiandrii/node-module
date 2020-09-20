const { Router } = require('express');
const carRouter = Router();
const {carController} = require('../controllers');
const { checkCarValidityMidlleware } = require('../midllewares');

module.exports = carRouter;

// create car
carRouter.post('/', checkCarValidityMidlleware ,carController.createCar);
// read all cars
carRouter.get('/', carController.getCars);
// read  cars by id
carRouter.get('/:carId', carController.getCarById);
// update car
carRouter.put('/:carId', carController.updateCarModelById);
//delete car
carRouter.delete('/:carId', carController.delateCarById);
