const bcrypt = require('bcrypt');
const {errors, CustomerErrorHandler, statusCodes} = require('../error');

module.exports = async (password, hashedPassword) => {
    const isPasswordEquals = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordEquals) {
        throw new CustomerErrorHandler(
            errors.NOT_FOUND_USER.message,
            statusCodes.NOT_FOUND,
            errors.NOT_FOUND_USER.code);
    }
};
