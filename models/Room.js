var mongoose = require('mongoose'),
    Light = require('../models/Light');

var room = mongoose.Schema({
  id : String,
  name : String,
  lights : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Light' }]
});

module.exports = mongoose.model("Room", room);