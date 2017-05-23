module.exports = function(app){
	var controller = app.controllers.cartao;
	var autenticar = require('../middleware/autenticacao');

      app.route('/gerar_relatorio')
         .get(controller.getRelatorio)
         .post(controller.gerarRelatorio)


}