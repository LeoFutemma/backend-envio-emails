const express = require('express');
const subscribe = require('./controllers/newsletter-signup');
const emailSender = require('./controllers/email-sender');

const routes = express();

routes.post('/subscribe', subscribe);
routes.get('/sendemail', emailSender);

module.exports = routes;