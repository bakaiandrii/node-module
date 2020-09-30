const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose')

const {carRouter, userRouter, authRouter, paymentRouter} = require('./routers');
const inctance = require('./database').getInstance();


const crone = require('./crone-jobs/crone-run');
let app = express();

dotenv.config();

inctance.setModels();

app.use(fileUpload({}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(encodeURI('mongodb://localhost/car_shop'),{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo error'));

app.use(express.static(path.join(process.cwd(),'public')));

app.use('/cars', carRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/pay', paymentRouter);

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
    crone();
    console.log('We are live on 5000 port')
});

process.on('unhandledRejection', reason => {
    console.log('----------------------------');
    console.log(reason);
    console.log('----------------------------');
    process.exit(0);
});