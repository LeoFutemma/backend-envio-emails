const knex = require('../connection');
const nodemailer = require('../nodemailer');

async function emailSender(req, res) {
  const { emailText } = req.body;

  try {
    const subscribersList = await knex("assinantes").select("nome", "email");

    for (subscriber of subscribersList) {
      const emailToSend = {
        from: 'API Newsletter <api-newsletter@backend.com.br>',
        to: subscriber.email,
        subject: "Bem-vindo à esta Newsletter!",
        template: 'newsletter',
        context: {
          nome: subscriber.nome,
          email: emailText
        }
      }
      nodemailer.sendMail(emailToSend);
    }

    return res.send("Newsletter enviada com sucesso!");
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

module.exports = emailSender;