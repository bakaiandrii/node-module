const jwt = require('jsonwebtoken');
const {CustomerErrorHandler, errors, statusCodes} = require('../error');
const {REFRESH_TOKEN_SECRET} = require('../config/config');
const {oAuthService} = require('../services')

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token){
        return next(new CustomerErrorHandler(
            errors.BAD_REQUEST_NOT_VALID_TOKEN.message,
            statusCodes.BAD_REQUEST,
        ))
    }
    jwt.verify(token, REFRESH_TOKEN_SECRET, {},err => {
        if(err){
            return next(new CustomerErrorHandler(
                errors.BAD_REQUEST_NOT_VALID_TOKEN.message,
                statusCodes.BAD_REQUEST,
            ))
        }
    });
    const tokens = await oAuthService.getByParams({refresh_token:token});

    if(!tokens){
        return next(new CustomerErrorHandler(
            errors.BAD_REQUEST_NOT_VALID_TOKEN.message,
            statusCodes.BAD_REQUEST,
        ))
    }
    req.user = tokens.User;

    next();
}
