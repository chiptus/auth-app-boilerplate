const router = require('./routes');

const { isReqLoggedIn } = require('./utils');

module.exports = {
  router,
  isReqLoggedIn,
};
