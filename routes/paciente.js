module.exports = function(app){
	var controller = app.controllers.paciente;

	app.route('/paciente')
		.get(controller.index);

}