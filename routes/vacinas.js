module.exports = function(app){
	var vacinasController = app.controllers.vacinas;

	
	app.route('/vacinas')
   		.get(vacinasController.create);
   	app.route("/create")
   		.post(vacinasController.insert);
   	app.route('/lista')
   		.get(vacinasController.listarVacina);
	
}


