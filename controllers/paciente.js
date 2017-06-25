module.exports = function(app){
	var paciente = app.models.paciente;
	var vacina = app.models.vacinas;
	var aplicador=app.models.aplicadorVacina;
	var moment = require('moment');
	var pacienteController = {
		
		index:function(req, res){
			res.render('Paciente/index');

		},
		create:function(req,res){
			res.render('Paciente/create',{usuario:new paciente});
		},
		cadastro:function(req,res){
			
				var model = new paciente();
				model.nome = req.body.nome;
				model.nasc = moment(req.body.nasc, 'DD-MM-YYYY');
				model.rg  = req.body.rg;
				model.cpf = req.body.cpf;
				model.sus = req.body.sus;
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
				model.telefone = req.body.fone;

			

			paciente.findOne({'cpf' : model.cpf}, function(err, data){
					if(data){
						req.flash('erro', 'CPF já cadastrado' + err);
						res.render('Paciente/create', {usuario: model});
					}else{
						model.save(function(err){

							if(err){
								req.flash('erro', 'Erro ao  cadastrar paciente: ' + err);
								res.render('Paciente/create', {usuario: model});
							}else{
								req.flash('info', 'paciente cadastrado!');

								res.render('Paciente/atualizar', {usuario: model});
							}
							
								
						});
					}
				});
		},
		buscar:function(req,res){
			paciente.findOne({sus: req.body.sus}, function(err, data){
				if(!data){
					req.flash('info','paciente não encontrado'+ err);
					res.render('Paciente/index');
				}else if (data){
					res.render('Paciente/atualizar', {usuario:data});
				}
			});

		},
		
		atualizar:function(req,res){
			paciente.findById(req.params.id, function(err,dados){
				var model = dados;
				model.nome = req.body.nome;
				model.nasc = moment(req.body.nasc, 'DD-MM-YYYY');
				model.rg  = req.body.rg;
				model.cpf = req.body.cpf;
				model.sus = req.body.sus;
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
				model.telefone = req.body.fone;
			

				model.save(function(err){

					if(err){
						req.flash('erro', 'Erro ao  atualizar dados: ' + err);
						res.render('Paciente/atualizar', {usuario: dados});
					}else{
						req.flash('info', 'dados atualizado!');

						res.render('Paciente/atualizar', {usuario: model});
					}
					
						
				});
			});
		},
		
			
		
		
	}
	return pacienteController;
}