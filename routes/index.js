var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	// this passes the vars to the index.pug
    //res.render('index', { title: 'Express' });
	console.log(path.join(__dirname + '/../views/index.html'));
	res.sendFile(path.join(__dirname + '/../views/index.html'));
});

module.exports = router;
