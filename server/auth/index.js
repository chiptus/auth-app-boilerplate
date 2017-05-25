const router = require('./routes');

const { isReqLoggedIn } = require('./utils');
const configureAuth = require('./passport');

module.exports = {
  router,
  isReqLoggedIn,
  configureAuth
};
