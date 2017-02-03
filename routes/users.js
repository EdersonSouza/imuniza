var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});
router.get('/cadastro',function(req,res){
	res.render('cadastro');
});

module.exports = router;
