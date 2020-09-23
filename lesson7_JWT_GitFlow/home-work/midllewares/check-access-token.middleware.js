const jwt = require('jsonwebtoken');
const {CustomerErrorHandler, errors, statusCodes} = require('../error');
const {ACCESS_TOKEN_SECRET} = require('../config/config');
const {oAuthService} = require('../services')

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
        return next(new CustomerErrorHandler(
            errors.BAD_REQUEST_NOT_VALID_TOKEN.message,
            statusCodes.BAD_REQUEST,
        ))
    }
    jwt.verify(token, ACCESS_TOKEN_SECRET, {}, err => {
        if (err) {
            return next(new CustomerErrorHandler(
                errors.BAD_REQUEST_NOT_VALID_TOKEN.message,
                statusCodes.BAD_REQUEST,
            ))
        }
    });
    let tokenWithUser = await oAuthService.getByParams({access_token: token});
    console.log(tokenWithUser.User);

    req.user = tokenWithUser.User;

    next();
}
