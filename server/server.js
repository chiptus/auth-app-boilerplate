'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config({ silent: true });

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGO_URI);

app.use(bodyParser.json());

app.use(routes);

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Node.js listening on port ' + port + '...');
});
