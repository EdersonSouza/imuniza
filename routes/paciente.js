module.exports = function(app){
	var controller = app.controllers.paciente;
	var autenticar = require('../middleware/autenticacao');

	app.route('/paciente')
		.get(controller.index);

	app.route("/cadastro/paciente")
		.get(autenticar, controller.create)
   		.post(autenticar, controller.cadastro);

   	app.route("/buscar")
   		.post(controller.buscar);

   	app.route("/paciente/edit/:id")
   		.post(controller.update)

   	app.route('/aplicarVacina')
   		.get(controller.aplicarView)
   		.post(controller.aplicar)

}