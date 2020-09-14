const express = require('express');
const path = require('path');

let app = express();

const { carRouter, userRouter } = require('./routers');
const inctance = require('./database').getInstance();
inctance.setModels();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/cars', carRouter);
app.use('/user', userRouter);

app.use('*',(err,req,res,next)=>{
    res
        .status(err.status || 404)
        .json({
            message: err.message || 'NOT FOUND',
            code: err.customCode || ''
        })
});



app.listen(5000, (err) => {
    if(err) throw err;
    console.log('We are live on 5000 port')
});
