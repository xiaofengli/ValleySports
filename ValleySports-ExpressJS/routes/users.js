var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/users', function(req, res, next) {
    //res.send('respond with a resource');
	
	res.sendFile(path.join(__dirname + '/../views/products.html'));
});

module.exports = router;
