const nodemailer = require('nodemailer');

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'mohammed.leannon@ethereal.email',
        pass: 'nXPKqEnaFYHcbdKGBY'
    }
};

module.exports = nodemailer.createTransport(mailConfig);
