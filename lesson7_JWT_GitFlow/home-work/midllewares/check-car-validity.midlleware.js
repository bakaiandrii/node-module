const {errors, CustomerErrorHandler, statusCodes} = require('../error');
const {carValidator} = require('../validators');

module.exports = (req, res, next) => {

    try {
        const car = req.body;
        let {error} = carValidator.newCarValidator.validate(car);

        if (error) {
            return next(new CustomerErrorHandler(
                error.details[0].message,
                statusCodes.BAD_REQUEST,
                errors.BAD_REQUEST_NOT_VALID_CAR.code));
        }

        next();
    } catch (e) {
        next(e);
    }
}



