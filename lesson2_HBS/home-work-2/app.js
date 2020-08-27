//Home work 2 registration of user, lo

const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const fs = require('fs');


let app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));

app.engine('.hbs', expressHandlebars({
    defaultLayout: false
}));
app.set('view engine', '.hbs');
app.set('views', path.join(process.cwd(), 'views'));

let obj = [];

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/registration', (req, res) => {
    res.render('registration');

});

app.get('/users', (req, res) => {

    fs.readFile(path.join(process.cwd(), 'users', 'myjsonfile.json'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            if (data) obj = JSON.parse(data);
            res.render('users', {obj});
        }
    });
});

app.get('/logination', (req, res) => {
    res.render('logination');
});

app.post('/logination', (req, res) => {
    fs.readFile(path.join(process.cwd(), 'users', 'myjsonfile.json'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            if (data) {
                obj = JSON.parse(data);
                for (const user of obj) {
                    if (user.email === req.body.email
                        && user.password === req.body.password) {
                        return res.render('main', {user: user.email, isSave: true});
                    } else {
                        return res.render('logination', {err: true});
                    }
                }
            }
        }
    });
});

app.post('/', (req, res) => {

    fs.readFile(path.join(process.cwd(), 'users', 'myjsonfile.json'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            if (data) {
                obj = JSON.parse(data);
                for (const user of obj) {
                    if (user.email == req.body.email
                        || user.password == req.body.password) {
                        return res.render('registration', {err: true});
                    } else {
                        obj.push(req.body);
                        fs.writeFile(path.join(process.cwd(), 'users', 'myjsonfile.json'), JSON.stringify(obj), 'utf8', (err) => {
                            if (err) {
                                console.log(err);
                            }
                        });
                        return res.render('main', {user: req.body.email, isSave: true});
                    }
                }
            } else {
                obj.push(req.body);
                fs.writeFile(path.join(process.cwd(), 'users', 'myjsonfile.json'), JSON.stringify(obj), 'utf8', (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
                return res.render('main', {user: req.body.email, isSave: true});
            }
        }
    });
});

app.get('/delete/:email', (req, res) => {
    console.log(req.params.email);
    fs.readFile(path.join(process.cwd(), 'users', 'myjsonfile.json'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            if (data) {obj = JSON.parse(data);
            for (const user of obj) {
                 obj = obj.filter(item => item.email != req.params.email);
                fs.writeFile(path.join(process.cwd(), 'users', 'myjsonfile.json'), JSON.stringify(obj), 'utf8', (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }}
        }
    });
    res.redirect('/users');
});

app.listen(5000, (err) => {
    if (err) throw err;
    console.log('Server is running on 5000');
});

