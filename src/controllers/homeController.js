const Home = require('../views/Home');
const renderTemplate = require('../lib/renderTemplate');

module.exports = class HomeController {
  static home(req, res) {
    renderTemplate(Home, null, res);
  }
};
