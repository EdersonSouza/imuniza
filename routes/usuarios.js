module.exports = function(app){
	var userController = app.controllers.usuario;
	app.route('/admin')
   		.get(userController.viewCadastro);

   	app.route("/cadastrar")
   		.post(userController.cadastro);

   	
}