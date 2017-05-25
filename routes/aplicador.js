module.exports = function(app){
	var controller = app.controllers.aplicadorVacina;
	var autenticar = require('../middleware/autenticacao');

	app.route("/cadastro/aplicador")
		.get(controller.create)
   		.post(controller.cadastro);

}