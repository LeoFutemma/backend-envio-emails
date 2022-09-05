const knex = require('../connection');

async function subscribe(req, res) {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json("É obrigatório preencher nome e email!");
  }

  try {
    const verifyEmail = await knex("assinantes").where({ email });

    if (verifyEmail.length > 0) {
      return res.status(400).json("Este email já está cadastrado!");
    }

  } catch (error) {
    return res.status(400).json(error.message);
  }

  try {
    const signedEmail = await knex("assinantes").insert({ nome, email });

    if (signedEmail.length === 0) {
      return res.status(400).json("Não foi possível cadastrar o email!");
    }

    return res.json("Email cadastrado com sucesso na Newsletter!");
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

module.exports = subscribe;