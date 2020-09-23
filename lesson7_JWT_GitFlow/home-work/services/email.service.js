const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');

const htmlTemplates = require('../email-templates');
const emailTemplates = new EmailTemplates({
    message: null,
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
});

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'andriyy11@gmail.com',
        pass: 'gmGladiator1@'
    }
});

class EmailService {
    async sendMail(userMail, action, context) {
        try {
            const templateInfo = htmlTemplates[action];
            const html = await emailTemplates.render(templateInfo.templateFileName, {
                ...context,
                frontUrl: 'https://auto.ria.com/uk/'
            });

            const mailOptions = {
                from: 'NO REPLY CAR SHOP',
                to: userMail,
                subject: templateInfo.subject,
                html
            };
            return transporter.sendMail(mailOptions)
        } catch (e) {
            console.log('*********************************');
            console.log(e);
            console.log('*********************************');
        }

    }
}

module.exports = new EmailService();