const {Router} = require('express');

const userRouter = Router();
const {userController} = require('../controllers');
const {checkUserValidityMidlleware, ckeckFileMiddleware, ckeckUserPhotoCountMiddleware} = require('../midllewares');

module.exports = userRouter;

userRouter.post(
    '/',
    checkUserValidityMidlleware,
    ckeckFileMiddleware,
    ckeckUserPhotoCountMiddleware,
    userController.createUser);

userRouter.get('/', userController.getUsers);

userRouter.get('/:carId', userController.getUserById);

userRouter.put('/:carId', userController.updateUserNameById);

userRouter.delete('/:carId', userController.delateUserById);
