const { validateWithProvider } = require('./utils');

const provider = {
  url: 'https://graph.facebook.com/me',
};

module.exports = {
  validateWithFacebook,
};

function validateWithFacebook(accessToken) {
  return validateWithProvider(provider, accessToken);
}
