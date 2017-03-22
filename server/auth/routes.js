const express = require('express');

const { isReqLoggedIn, validateWithFacebook } = require('./utils');

const router = new express.Router();

module.exports = router;

// route to test if the user is logged in or not
router.get('/loggedin', isReqLoggedIn, function(req, res) {
  res.json({ loggedIn: !!req.profile });
});

router.post('/facebook', ({ body: { socialToken } }, res, next) => {
  validateWithFacebook(socialToken)
    .then(user => {
      return Promise.all([
        saveUser(user.name, user.id, 'facebook', socialToken),
        user,
      ]);
    })
    .then(([{ _id, polls }, user]) => ({
      token: createJwt(
        {
          dbId: _id,
          socialId: user.id,
          name: user.name,
        },
        'CLIENT-APP'
      ),
      user: {
        name: user.name,
        _id,
        polls,
      },
    }))
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.sendStatus(403);
      next(new Error(err));
    });
});
