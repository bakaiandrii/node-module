const {errors, CustomerErrorHandler, statusCodes} = require('../error');
const {userValidator} = require('../validators');


module.exports = (req, res, next) => {

    try {
        const user = req.body;
        let {error} = userValidator.newUserValidator.validate(user);

        if (error) {
            return next(new CustomerErrorHandler(
                error.details[0].message,
                statusCodes.BAD_REQUEST,
                errors.BAD_REQUEST_NOT_VALID_USER.code));
        }
        next();
    } catch (e) {
        next(e);
    }
}
