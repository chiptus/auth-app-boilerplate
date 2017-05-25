const express = require('express');

const { isReqLoggedIn, createJwt } = require('./utils');
const { validateWithFacebook } = require('./login-providers');
const { CLIENT_URL } = require('./config');
const router = new express.Router();
const issuer = process.env.CLIENT_NAME;

module.exports = router;

// route to test if the user is logged in or not
router.get('/loggedin', isReqLoggedIn, function(req, res) {
  res.json({ loggedIn: !!req.profile });
});

// router.post('/facebook', ({ body: { socialToken } }, res, next) => {
//   validateRequestWithFacebook(socialToken, res, next)
//     .then(saveUserAndReturn(socialToken))
//     .then(processDbResponse)
//     .then(res.json);
// });

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
router.get(
  '/auth/facebook',
  passport.authenticate('facebook', { session: false })
);

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: `${CLIENT_URL}/`,
    failureRedirect: `${CLIENT_URL}/login`,
  })
);

function validateWithFacebookAndCatch(token, res, next) {
  return validateWithFacebook(token).catch(err => {
    res.sendStatus(403);
    next(new Error(err));
  });
}

function processDbResponse([userDb, userSn]) {
  return {
    token: createToken(userDb, userSn),
    user: {
      name: userSn.name,
      _id,
    },
  };
}

function saveUserAndReturn(socialToken) {
  return user =>
    Promise.all([saveUser(user.name, user.id, 'facebook', socialToken), user]);
}

function createToken({ _id }, userSn) {
  return createJwt({
    dbId: _id,
    socialId: userSn.id,
    name: userSn.name,
  });
}
