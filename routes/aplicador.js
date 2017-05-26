module.exports = function(app){
	var controller = app.controllers.aplicadorVacina;
	var autenticar = require('../middleware/autenticacao');

	app.route("/cadastro/aplicador")
		.get(controller.create)
   		.post(controller.cadastro);
   	app.route("/usuarios/editar/:id")
   		.post(controller.atualizar)
   	app.route("/consultar/aplicador")
   		.get(controller.buscar)
   		.post(controller.edit)

}