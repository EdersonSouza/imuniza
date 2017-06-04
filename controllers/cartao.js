module.exports = function(app){
	var paciente = app.models.paciente;
	var vacina = app.models.vacinas;
	var aplicador=app.models.aplicadorVacina;
	var moment = require('moment');
	
	var cartaoController = {

		getRelatorio: function(req, res){
			res.render("Vacinas/relatorio");

		},

		gerarRelatorio: function(req,res){

			var ini = req.body.din;
			var fim = req.body.dfim;
			var vac={};

	

			vacina.find({"dados.data":{'$gte':ini , '$lte':fim}})
				.sort('dados.data')
				.populate('dados.paciente')
				.populate('dados.aplicador')
				.exec(function(err,vacinas){

					if(!vacinas){
						res.send('erro ao popular paciente');
					}else if(vacinas){
						
						res.render("Vacinas/listRelatorio", {vacinas:vacinas});
					}

				});

		},
		
		
		imprimiCartao:function(req,res){
			paciente.findOne({sus:req.body.sus})
				.sort('data')
				.populate('vacinas.vacina')
				.populate('vacinas.aplicador')
				.exec(function(err, dados){
					if(!dados){
						res.send('paciente não encontrado');
					}else if(dados){
						res.render('Paciente/cartao', {paciente:dados});
					}
				});
		},
		update: function(req, res){
			
		},
		aplicarView: function(req, res){
			vacina.find()
				.exec(function(err, dados){
					if(!dados){
						res.render('Paciente/aplicarVacina', {vacina: '', paciente: ' '});
					}else if(dados){
						res.render('Paciente/aplicarVacina', {vacinas: dados, paciente: ' '});
					}
				});
			
		},
		aplicar: function(req, res){
			vacina.findOne({_id: req.body.vacinas}, function(err, data){
				if(err){
					res.send('vacina não encontrada');
					console.log("entrou aqui");
				}else{
					aplicador.findOne({coren: req.session.usuario.coren}, function(err, dados){
						if(err){
							res.send('Agente de saúde não encontrado');
							console.log('entrou aqui');

						}else{

							console.log(dados.nome)

							paciente.findById({_id: req.body.id}, function(err, paciente){


							paciente.vacinas.push({data: req.body.date, vacina: data._id, aplicador: dados._id});
							dados.vacinas.push({data: req.body.date, vacina: data._id, paciente: paciente._id})
							data.dados.push({data:req.body.date, paciente:paciente._id, aplicador: dados._id})

							paciente.save(function(err){
								if(err){
									req.flash('erro', 'Erro ao atualizar os dados: ' + err);
									res.render('Paciente/cartao', {paciente: paciente});
								}
								else{
										dados.save(function(err){

											if(err){
												req.flash('erro', 'Erro ao atualizar os dados: ' + err);
												
											}
											else{

												data.save(function(err){
													if(err){
														req.flash('erro', 'Erro ao atualizar os dados: ' + err);
														}
														else{

															console.log("entrou aqui");
															req.flash('info', 'Registro atualizado com sucesso!');
															res.redirect('/aplicarVacina');

														}

												});
												
											}

										});

										
									}
								
								});
							});

						}
						
					});

					
					
				}
			});
			
		}
	}
	return cartaoController;
}