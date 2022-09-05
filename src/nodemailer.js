const nodemailer = require('nodemailer');
const handlebars = require('nodemailer-express-handlebars');

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8c4aab6ca62bf8",
    pass: "e7873254d49a69",
  },
});

transporter.use('compile', handlebars({
  viewEngine: {
    extname: '.handlebars',
    defaultLayout: false
  },
  viewPath: './views/'
}));

module.exports = transporter;