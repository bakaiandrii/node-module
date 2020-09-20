const { Router } = require('express');
const authRouter = Router();
const { authController} = require('../controllers');
const { checkIsUserPresentMiddleware} = require('../midllewares');

module.exports = authRouter;


authRouter.post('/', checkIsUserPresentMiddleware ,authController.login);
