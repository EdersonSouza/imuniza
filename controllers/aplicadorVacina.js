module.exports = function(app){
	var aplicador = app.models.aplicadorVacina;

	var aplicadorController={

		create:function(req,res){
			res.render('AplicadorVacina/cadastrar');
		},
		cadastro:function(req,res){
			
			var model = new aplicador();
			model.nome = req.body.nome;
			model.nasc = req.body.nasc;
			model.rg  = req.body.rg;
			model.cpf = req.body.cpf;
			model.coren = req.body.coren;
			model.email = req.body.email;
			model.sexo = req.body.sexo;
			model.pais.pai = req.body.pai;
			model.pais.mae = req.body.mae;
			model.endereco.rua =req.body.rua;
			model.endereco.numero = req.body.numero;
			model.endereco.bairro = req.body.bairro;
			model.endereco.cep = req.body.cep;
			model.endereco.cidade = req.body.cidade;
			model.endereco.uf = req.body.uf;
			model.telefone = req.body.telefone;
			model.tipo = req.body.optradio;
			model.senha = model.generateHash(req.body.senha);

			

			aplicador.findOne({'cpf' : model.cpf}, function(err, data){
					if(data){
						req.flash('erro', 'CPF já cadastrado');
						res.render('Aplicador/cadastrar',{aplicador:model});
					}else{
						model.save(function(err){
							if(err){
								req.flash('erro', 'Erro ao cadastrar Agente de saúde: ' + err);
								res.render('AplicadorVacina/cadastrar', {aplicador: req.body});
							}else{
								req.flash('info', 'Agente de saúde cadastrado com sucesso!');

								res.render('usuarios/admin');
							}
						});
					}
				});
		},

	}
	
	return aplicadorController;
}