const {Router} = require('express');

const authRouter = Router();
const {authController} = require('../controllers');
const {checkIsUserPresentMiddleware, checkRefreshTokenMiddleware} = require('../midllewares');

module.exports = authRouter;

authRouter.post('/', checkIsUserPresentMiddleware, authController.login);
authRouter.post('/refresh', checkRefreshTokenMiddleware, authController.refreshToken);
authRouter.post('/logout', authController.logout);
