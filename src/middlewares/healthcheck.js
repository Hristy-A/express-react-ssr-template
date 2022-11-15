const sequelize = require('../../db/models');

module.exports = async function healthcheck(req, res) {
  try {
    await sequelize.authenticate();
    res.status(200).end('Ok');
  } catch (error) {
    res.status(500).end("Db doesn't response");
  }
};
