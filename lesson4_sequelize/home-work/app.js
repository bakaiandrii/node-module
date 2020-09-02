const express = require('express');
const path = require('path');

let app = express();

const carRouter = require('./routers/car.router');
const inctance = require('./database').getInstance();
inctance.setModels();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/cars', carRouter);



app.listen(5000, (err) => {
    if(err) throw err;
    console.log('We are live on 5000 port')
});
