const FacebookStrategy = require('passport-facebook').Strategy;

const { saveUser } = require('./user.controller');
const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = require('./config');

module.exports = configAuth;

const CALL_BACK = 'localhost:8080/auth/facebook/callback';


function configAuth(passport) {
  passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: CALL_BACK,
      },
      function(accessToken, refreshToken, profile, done) {
        saveUser(profile.displayName, profile.id, profile.provider)
          .then(user => {
            processDbResponse(user, profile)
          })

        //TODO do something with accesstoken and refreshtoken
      }
    )
  );
}


function processDbResponse(userDb, profile) {
  return {
    token: createToken(userDb, userSn),
    user: {
      name: userSn.name,
      _id,
    },
  };
}


function createToken({ _id }, userSn) {
  return createJwt({
    dbId: _id,
    socialId: userSn.id,
    name: userSn.name,
  });
}