const Joi = require('joi');
const {EMAIL, PHONE_NUMBER} = require('../../config/regexp.enum');
module.exports = Joi.object().keys({
    name: Joi.string().trim().alphanum().min(2).max(50).required(),
    email: Joi.string().regex(EMAIL).required(),
    password: Joi.string().trim().min(8).required(),
    phoneNumber: Joi.string().regex(PHONE_NUMBER).required()
});
