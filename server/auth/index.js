const router = require('./routes');

const { validateWithFacebook } = require('./facebook');
const { isReqLoggedIn } = require('./utils');

module.exports = {
  router,
  isReqLoggedIn,
};
