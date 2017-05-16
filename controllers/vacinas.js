module.exports = function(app){
	var validacao = require('../Validacao/vacina');

	var Vacina = app.models.vacinas;

	var vacinaController = {

		listarVacina: function(req,res){
			Vacina.find(function(err,dados){
				if(err){
					//
				}else{
					res.render("Vacinas/lista", {lista:dados});
				}

			});
		},
		

		create: function(req,res){
			res.render("Vacinas/create");
		},

		insert: function(req,res){
			if(validacao(req,res)){
				var model = new Vacina(req.body);
					model.save(function(err){
					if(err){
					console.log(err);
				}
				//req.flash('info','vacinas cadastrado com sucesso!');
				res.redirect("/lista");
			});
			}else{
				res.render("Vacinas/create",{vac:req.body});
			}

			


		},
		delete: function(req,res){
			Vacina.remove({_id: req.params.id}, function(err){
				if(err){
					req.flash('erro', 'Erro ao excluir usuário: '+err);
					res.redirect('/show');
				}// VERIFICA SE O USUARIO EXCLUÍDO É O MESMO DA SESSÃO. SE FOR ENCERRA A SESSÃO
				else{
					
						req.flash('info', 'Registro excluído com sucesso!');
						res.redirect('/lista');
					
				}
			});
		},
		show:function(req,res){
			Vacina.findById(req.params.id, function(err,dados){
				if(err){
					req.flash('erro', 'Erro ao visualizar vacina: '+err);
					res.redirect('/lista');
					
				}else{
					res.render('Vacinas/show',{dados:dados})
				}
			});
		},

		edit: function(req, res){
			Vacina.findById(req.params.id, function(err, data){
				if(err){
					req.flash('erro', 'Erro ao editar: '+err);
					res.redirect('/lista');
				}else{
					res.render('Vacinas/atualizar', {dados: data});
				}
			});
		},

		update: function(req, res){
			Vacina.findById(req.params.id, function(err, data){
					console.log('ID: '+ req.params.id);
					var modelo		 = data;
					modelo.nome 	 = req.body.nome;
					

					modelo.save(function(err){
						if(err){
							req.flash('erro', 'Erro ao atualizar os dados: ' + err);
							res.render('Vacinas/atualizar', {dados: data});
						}
						else{
								req.flash('info', 'Registro atualizado com sucesso!');
								res.redirect('/lista');
							}
						
					});
				});
		}

		

	
	}
	return vacinaController;
}