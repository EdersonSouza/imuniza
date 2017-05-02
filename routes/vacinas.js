module.exports = function(app){
	var vacinasController = app.controllers.vacinas;

	
	app.route('/vacinas')
   		.get(vacinasController.create);
   app.route("/create")
   		.post(vacinasController.insert);
   app.route('/lista')
   		.get(vacinasController.listarVacina);
   app.route('/show/:id')
   		.get(vacinasController.show);

   app.route('/vacina/delete/:id')
   		.post(vacinasController.delete);
   app.route('/vacina/edit/:id')
         .get(vacinasController.edit)
         .post(vacinasController.update);
	
}


