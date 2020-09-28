const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const dotenv = require('dotenv');

const {carRouter, userRouter, authRouter} = require('./routers');
const inctance = require('./database').getInstance();

let app = express();

dotenv.config();

inctance.setModels();

app.use(fileUpload({}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(process.cwd(),'public')));

app.use('/cars', carRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);

app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 404)
        .json({
            message: err.message || 'NOT FOUND',
            code: err.customCode || ''
        })
});

app.listen(5000, (err) => {
    if (err) throw err;
    console.log('We are live on 5000 port')
});

process.on('unhandledRejection', reason => {
    console.log('----------------------------');
    console.log(reason);
    console.log('----------------------------');
    process.exit(0);
});