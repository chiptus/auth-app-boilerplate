const request = require('request');
const jwt = require('jsonwebtoken');

module.exports = {
  createJwt,
  isReqLoggedIn,
};

function isReqLoggedIn(req, res, next) {
  let profile;
  try {
    profile = req.query.jwt && verifyJwt(req.query.jwt);
  } catch (e) {
    return res.status(403).json(e);
  }
  if (profile) {
    req.profile = profile;
    return next();
  } else {
    res.sendStatus(403);
  }
}

const PRIVATE_KEY = process.env.PRIVATE_KEY;

function createJwt(profile, issuer) {
  return jwt.sign(profile, PRIVATE_KEY, {
    expiresIn: '2h',
    issuer,
  });
}

function verifyJwt(jwtString, issuer) {
  return jwt.verify(jwtString, PRIVATE_KEY, {
    issuer,
  });
}
