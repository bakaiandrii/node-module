const Router = require('express').Router;

const {paymentController} = require('../controllers');

const paymentRouter = new Router();

paymentRouter.get('/', paymentController.getAll);
paymentRouter.post('/', paymentController.createPayment);

module.exports =  paymentRouter;