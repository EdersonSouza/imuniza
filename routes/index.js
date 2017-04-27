/*var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Imuniza' });
});

module.exports = router;
*/

module.exports = function(app){
	var controller = app.controllers.home;

	app.route('/')
		.get(controller.index);

}