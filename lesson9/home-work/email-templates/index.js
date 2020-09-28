const emailAction = require('../config/email-action.enum');

module.exports = {
    [emailAction.WELCOME]: {
        subject: '[CAR SHOP] WELCOME!',
        templateFileName: 'welcome'
    },
    [emailAction.FORGOT_PASS]: {
        subject: '[CAR SHOP] Forgot password!',
        templateFileName: 'forgot-pass'
    },
    [emailAction.NEW_CAR_CONGRATS]: {
        subject: '[CAR SHOP] New car added!',
        templateFileName: 'new-car'
    },
    [emailAction.DELETE_CAR]: {
        subject: '[CAR SHOP] DELETED car!',
        templateFileName: 'delate-car'
    },
}
