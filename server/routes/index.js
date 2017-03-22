const express = require('express');
const path = require('path');

const authRouter = require('./auth');

const router = new express.Router();

router.use('/auth', authRouter);

if (process.env.NODE_ENV === 'production') {
  //add routes for production
  console.log('production');
  router.use('/', express.static());
  // Always return the main index.html, so react-router render the route in the client
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', '..', 'client-web', 'build', 'index.html')
    );
  });
  //
}

module.exports = router;
