var url = require('url');
// var CPF =  require('cpf_cnpj').CPF;

module.exports = function(req,res){
	var createUrl = url.parse(req.url).pathname == "/create";
	console.log(createUrl);
	
	
	req.assert('nome', 'Informe o nome.').notEmpty();
	
	
	

	var validaErros = req.validationErrors() || [];

	
	

	if(validaErros.length > 0){
		validaErros.forEach(function(e){
			req.flash('erro', e.msg);
		});
		return false;
	}else{
		return true;
	}
}