module.exports = function(app){
	var controller = app.controllers.cartao;
	var autenticar = require('../middleware/autenticacao');

    app.route("/imprimiCartao/:id")
        .get(controller.imprimiCartao);

   	/*app.route('/aplicarVacina')
   		.get(controller.aplicarView)
   		.post(controller.aplicar)*/

   	app.route('/aplicarVacina/:id')
   		.post(controller.aplicar)



}