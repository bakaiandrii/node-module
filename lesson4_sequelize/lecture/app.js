let express = require('express');
let expressHandlebars = require('express-handlebars');
let path = require('path');

let app = express();

const inctance = require('./database').getInstance();
inctance.setModels();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

// let arr = ['Dima', 'Inna'];
let arr = [{name: 'Dima'}, {name:'Inna'}];

const userRouter =require('./routers/user.router');
const carRouter = require('./routers/car.router');

app.engine('.hbs', expressHandlebars({
    defaultLayout: false
}));
app.set('view engine', '.hbs');
app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res) => {
    // console.log(req);
    // res.write('test');
    // res.json('this is JSON');
    // res.status(202);
    // res.sendStatus(400);
    // res.end('All rigth');
    res.render('main', {message: 'Priver chatic', isFine: false});

});

app.get('/render-register', (req, res) => {
     res.render('register');
});



app.post('/reg', (req, res) => {
    console.log('_____________________');
    console.log(req.body.name);
    console.log(req.body.password);
    res.end('OK');
});

app.use('/users', userRouter);
app.use('/cars', carRouter);

app.listen(5000, (err) => {
    if (err) throw err;
    console.log('Server is running on 5000');
});

