'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  social: {
    facebook: String,
  },
  name: String,
});

module.exports = mongoose.model('User', User);
