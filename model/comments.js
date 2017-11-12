'use strict';

// import dependency
var mongoose = require('mongoose');
mongoose.set('debug', true);

var Schema = mongoose.Schema;

// create new instance of the mongoose.schema, the schema takes an
// object that shows the shape of your database entries
var CommentsSchema = new Schema({
  author: String,
  text: String
});

// export our module to use in server.js
var Comment = mongoose.model('Comment', CommentsSchema);

module.exports = Comment;
