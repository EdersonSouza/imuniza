module.exports = function(app){
	var controller = app.controllers.paciente;
	var autenticar = require('../middleware/autenticacao');

	app.route('/paciente')
		.get(autenticar, controller.index);

	app.route("/cadastro/paciente")
   		.post(autenticar, controller.cadastro);

}