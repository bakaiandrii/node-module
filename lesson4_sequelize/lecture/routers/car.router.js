const { Router } = require('express');
const carController = require('../controllers/cars.controller');

const carsRouter = Router();

carsRouter.get('/', carController.fetchAll);
carsRouter.post('/', carController.create);
carsRouter.get('/filter', carController.findWithFilter);

module.exports = carsRouter;
