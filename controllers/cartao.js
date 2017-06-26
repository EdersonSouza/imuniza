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

		relatorioAplicador: function(req,res){

			var ini = req.body.din;
			var fim = req.body.dfim;
			var idaplic=req.params.id;

	

			paciente.findById(idaplic,{"dados.data":{'$gte':ini , '$lte':fim}})
				.sort('dados.data')
				.populate('dados.paciente')
				.populate('dados.vacina')
				.exec(function(err,apli){

					if(!apli){
						res.send('erro ao popular aplicador');
					}else if(apli){
						
						res.render("AplicadorVacina/listRelatorio", {vacinador:apli});
					}

				});

		},
		
		
		imprimiCartao:function(req,res){
			paciente.findOne({sus:req.body.sus})
				.sort('vacinas.data')
				.populate('vacinas.vacina')
				.populate('vacinas.aplicador')
				.exec(function(err, dados){
					if(!dados){
						res.send('erro','paciente não encontrado' + err);
						
					}else if(dados){

						vacina.find()
							.exec(function(err, vac){
								if(!dados){
								res.render('Paciente/cartaopaciente', {vacinas: '', paciente: dados});
							}else if(dados){
								res.render('Paciente/cartaopaciente', {vacinas: vac, paciente: dados});
							}
						});

					}
				});
		},

		imprimiCartaoid:function(req,res){
			paciente.findById(req.params.id)
				.sort('vacinas.data')
				.populate('vacinas.vacina')
				.populate('vacinas.aplicador')
				.exec(function(err, dados){
					if(!dados){
						res.send('paciente não encontrado');
					}else if(dados){

						vacina.find()
							.exec(function(err, vac){
								if(!dados){
								res.render('Paciente/cartao', {vacinas: '', paciente: dados});
							}else if(dados){
								res.render('Paciente/cartao', {vacinas: vac, paciente: dados});
							}
						});

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

							paciente.findById(req.params.id, function(err, paci){

								


								paci.vacinas.push({data: req.body.date, vacina: data._id, aplicador: dados._id});
								dados.vacinas.push({data: req.body.date, vacina: data._id, paciente: paci._id})
								data.dados.push({data:req.body.date, paciente:paci._id, aplicador: dados._id})

								paci.save(function(err){
									if(err){
										req.flash('erro', 'Erro ao atualizar os dados: ' + err);
										res.render('Paciente/cartao', {paciente: paci});
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

																console.log(paciente.id);
																req.flash('info', 'Registro atualizado com sucesso!');

																paciente.findById(req.params.id)
																	.sort('data')
																	.populate('vacinas.vacina')
																	.populate('vacinas.aplicador')
																	.exec(function(err, dados){
																		if(!dados){
																			res.send('paciente não encontrado');
																		}else if(dados){

																			vacina.find()
																				.exec(function(err, vac){
																					if(!dados){
																					res.render('Paciente/cartao', {vacinas: '', paciente: dados});
																				}else if(dados){
																					res.render('Paciente/cartao', {vacinas: vac, paciente: dados});
																				}
																		});

																	}
																});
															
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