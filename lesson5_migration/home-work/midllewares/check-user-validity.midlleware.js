const { errors, CustomerErrorHandler, statusCodes } = require('../error');
const emailValidator = require("email-validator");
const validatePhoneNumber = require('validate-phone-number-node-js');

module.exports = (req, res, next) => {
    const user = req.body;

    try {

        if (!user.name) {
            return next(new CustomerErrorHandler(
                errors.BAD_REQUEST_NOT_VALID_USER_NAME.message,
                statusCodes.BAD_REQUEST,
                errors.BAD_REQUEST_NOT_VALID_USER_NAME.code));
        }
        if (!emailValidator.validate(user.email)) {
            return next(new CustomerErrorHandler(
                errors.BAD_REQUEST_NOT_VALID_USER_EMAIL.message,
                statusCodes.BAD_REQUEST,
                errors.BAD_REQUEST_NOT_VALID_USER_EMAIL.code));
        }
        if (!validatePhoneNumber.validate(user.phoneNumber)) {
            return next(new CustomerErrorHandler(
                errors.BAD_REQUEST_NOT_VALID_USER_PHONE_NUMBER.message,
                statusCodes.BAD_REQUEST,
                errors.BAD_REQUEST_NOT_VALID_USER_PHONE_NUMBER.code));
        }


        next();
    } catch (e) {
        next(e);
    }
}
