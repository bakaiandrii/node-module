const { errors, CustomerErrorHandler, statusCodes } = require('../error');


module.exports = (req, res, next) => {
    const car = req.body;
    const year = new Date().getFullYear();

    try {

        if (!car.model) {
           return next(new CustomerErrorHandler(
               errors.BAD_REQUEST_NOT_VALID_CAR_MODEL.message,
               statusCodes.BAD_REQUEST,
               errors.BAD_REQUEST_NOT_VALID_CAR_MODEL.code));
        }
        if (!(car.year) || car.year < 1900 || car.year > year) {
            return next(new CustomerErrorHandler(
                errors.BAD_REQUEST_NOT_VALID_CAR_YEAR.message,
                statusCodes.BAD_REQUEST,
                errors.BAD_REQUEST_NOT_VALID_CAR_YEAR.code));
        }
        if (!car.price) {
            return next(new CustomerErrorHandler(
                errors.BAD_REQUEST_NOT_VALID_CAR_PRICE.message,
                statusCodes.BAD_REQUEST,
                errors.BAD_REQUEST_NOT_VALID_CAR_PRICE.code));
        }
        if (!car.userId) {
            return next(new CustomerErrorHandler(
                errors.BAD_REQUEST_NOT_VALID_USER_ID.message,
                statusCodes.BAD_REQUEST,
                errors.BAD_REQUEST_NOT_VALID_USER_ID.code));
        }

        next();
    } catch (e) {
        next(e);
    }
}



