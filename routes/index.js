var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(path.join(__dirname + '/../views/index.html'));
	res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.get('/huntingparka', function(req, res, next) {
	res.sendFile(path.join(__dirname + '/../views/huntingparka.html'));
});

router.get('/swimshort', function(req, res, next) {
	res.sendFile(path.join(__dirname + '/../views/swimshort.html'));
});

router.get('/boardshort', function(req, res, next) {
	res.sendFile(path.join(__dirname + '/../views/boardshort.html'));
});

module.exports = router;
