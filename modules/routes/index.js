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

// router.get('/rooms', function(req, res) {
//   console.log('rooms url hit');
//   res.sendFile(path.resolve('views/rooms.html'));
// }); // end router.get for rooms.html

module.exports = router;
