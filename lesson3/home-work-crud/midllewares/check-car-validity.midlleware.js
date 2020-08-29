// {id: 1, model: 'opel', year: 2000, custumer: 'Petro'},
const cars = require('../carArr');

module.exports = (req, res, next) => {
    const car = req.body;

    try {

        if (!car.model) {
            throw new Error('No model name')
        }
        if (!(car.year) || car.year < 1900) {
            throw new Error('Not valid model year')
        }
        if (!car.custumer) {
            throw new Error('No custumer name')
        }

        next();
    } catch (e) {
        return res.status(400).end(e.message);
    }
}



