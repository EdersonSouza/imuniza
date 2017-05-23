module.exports = function(app){
	var controller = app.controllers.cartao;
	var autenticar = require('../middleware/autenticacao');

      app.route("/imprimiCartao")
         .post(controller.imprimiCartao);

   	app.route('/aplicarVacina')
   		.get(controller.aplicarView)
   		.post(controller.aplicar)



}