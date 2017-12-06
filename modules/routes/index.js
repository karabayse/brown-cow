var express = require('express');
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');

// uses
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/*', function(req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
}); // end router.get for index.html

router.get('/learn', function(req, res) {
  console.log('learn url hit in index.js');
  res.sendFile(path.resolve('views/learn.html'));
}); // end router.get for learn.html

router.get('/score', function(req, res) {
  console.log('score url hit in index.js');
  res.sendFile(path.resolve('views/score.html'));
}); // end router.get for score.html

module.exports = router;
