module.exports = {
  validateWithProvider,
};

function validateWithProvider(provider, socialToken) {
  return new Promise(function(resolve, reject) {
    request(
      {
        url: provider.url,
        qs: { access_token: socialToken },
      },
      function(error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(JSON.parse(body));
        } else {
          reject(err);
        }
      }
    );
  });
}
