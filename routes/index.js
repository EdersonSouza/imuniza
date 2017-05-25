
module.exports = function(app){
	var controller = app.controllers.home;
	var autenticar = require('../middleware/autenticacao');

	app.route('/')
		.get(controller.index);
	app.route("/acessar")
   		.post(controller.autenticar);
   	app.route('/sair')
   		.get(controller.logout)

   	app.route('/logado')
   		.get(controller.home)
   	app.route('/perfil/:id')
   		.get(controller.perfil)

}