var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/about', function(req, res, next) {
	// this passes the vars to the index.pug
    //res.render('index', { title: 'Express' });
	res.sendFile(path.join(__dirname + '/../views/index.html'));
});

module.exports = router;
