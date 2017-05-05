module.exports = function(app){
	var vacinasController = app.controllers.vacinas;
   var autenticar = require('../middleware/autenticacao');

	
	app.route('/vacinas')
   		.get(autenticar, vacinasController.create);
   app.route("/create")
   		.post(autenticar, vacinasController.insert);
   app.route('/lista')
   		.get(autenticar, vacinasController.listarVacina);
   app.route('/show/:id')
   		.get(autenticar, vacinasController.show);

   app.route('/vacina/delete/:id')
   		.post(autenticar, vacinasController.delete);
   app.route('/vacina/edit/:id')
         .get(autenticar, vacinasController.edit)
         .post(autenticar, vacinasController.update);
	
}


