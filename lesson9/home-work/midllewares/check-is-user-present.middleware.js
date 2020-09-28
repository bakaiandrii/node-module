const {errors, CustomerErrorHandler, statusCodes} = require('../error');
const {userServise} = require('../services');


module.exports = async (req, res, next) => {


    try {
        const {email} = req.body;
        const user = await userServise.findOneByParams({email});

        if (!user) {
            return next(new CustomerErrorHandler(
                errors.NOT_FOUND_USER.message,
                statusCodes.NOT_FOUND,
                errors.NOT_FOUND_USER.code));
        }
        req.user = user;

        next();
    } catch (e) {
        next(e);
    }
}
