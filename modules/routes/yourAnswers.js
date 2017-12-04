var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var yourAnswersSchema = new mongoose.Schema({
  entry1: String,
  entry2: String,
  entry3: String,
  entry4: String,
  entry5: String,
  entry6: String,
  entry7: String,
  entry8: String,
  entry9: String
}); // end yourAnswersSchema
var yourAnswersModel = mongoose.model('yourAnswersModel', yourAnswersSchema);

router.post('/', function(req, res) {
  console.log('yourAnswers url hit', req.body);
  var newAnswers = req.body;
  console.log('req.body:', req.body);
  yourAnswersModel(newAnswers).save().then(function() {
    res.sendStatus(201);
  }).catch(function(err) {
    console.log('error', err);
  });
}); // end router.post for yourAnswersEntry


module.exports = router;
