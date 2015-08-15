var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 'message': 'hide','messageContent':null});
});

router.get('/signup',function(req,res){
	res.render('login_v1');
});

router.get('/user-interest',function(req,res){
	res.render('user_interest');
});

module.exports = router;
