module.exports = function(app){
	var controller = app.controllers.cartao;
	var autenticar = require('../middleware/autenticacao');

    app.route("/imprimiCartao")
        .post(controller.imprimiCartao);
    app.route("/imprimiCartao/:id")
        .get(controller.imprimiCartaoid)

   	/*app.route('/aplicarVacina')
   		.get(controller.aplicarView)
   		.post(controller.aplicar)*/

   	app.route('/aplicarVacina/:id')
   		.post(controller.aplicar)

   	app.route('/gerar_relatorio_vacinador/:id')
   		.post(controller.relatorioAplicador)



}