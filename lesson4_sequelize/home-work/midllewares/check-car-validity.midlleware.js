// {id: 1, model: 'opel', year: 2000, custumer: 'Petro'},


module.exports = (req, res, next) => {
    const car = req.body;
    const year = new Date().getFullYear();

    try {

        if (!car.model) {
            throw new Error('No model name')
        }
        if (!(car.year) || car.year < 1900 || car.year > year) {
            throw new Error('Not valid model year')
        }
        if (!car.price) {
            throw new Error('No price name')
        }

        next();
    } catch (e) {
        return res.status(400).end(e.message);
    }
}



