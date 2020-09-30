const {Router} = require('express');

const carRouter = Router();
const {carController} = require('../controllers');
const {checkCarValidityMidlleware, checkAccessTokenMiddleware} = require('../midllewares');

module.exports = carRouter;

carRouter.post('/', checkAccessTokenMiddleware, checkCarValidityMidlleware, carController.createCar);

carRouter.get('/', carController.getCars);

carRouter.get('/:carId', carController.getCarById);

carRouter.put('/:carId', carController.updateCarModelById);

carRouter.delete('/:carId', checkAccessTokenMiddleware, carController.delateCarById);
