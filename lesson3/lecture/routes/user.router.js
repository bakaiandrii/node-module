const { Router } = require('express');
const userRouter = Router();
const conrtoller = require('../controllers/user.controller');

module.exports = userRouter;

let arr = [{name: 'Dima'}, {name:'Inna'}];

userRouter.post('/', conrtoller.createUser);

userRouter.get('/', (req, res) => {
    res.render('users', { arr })
});
