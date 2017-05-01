module.exports = function(app){
	var userModel = app.models.usuario;
	var usuarioController = {
		autenticar:function(req,res){
			var usuario = new userModel();
			var senha = req.body.senha;
			userModel.findOne({registro : req.body.registro}, function(err, user){
				if (err){
					req.flash("erro", "erro de autenticação ");
					res.redirect('/');
				}else if(!user){
					req.flash("erro", "usuario não cadastrado ");
					res.redirect('/');

				}else if(user.validPassword(senha, user.senha)){
					req.session.usuario = user;
					res.send('usuario logado com sucesso: '+ user.nome + " registro: "+ user.registro);
				}else {
					res.send('registro ou senha invalido');
				}
			});
		},
		viewCadastro:function(req, res){
			res.render('usuarios/usuarios');

		},
		cadastro:function(req, res){
			var model = new userModel();
			model.nome = req.body.nome;
			model.registro = req.body.registro;
			model.senha = model.generateHash(req.body.senha);
			model.save(function(err, user){
				if (err){
					res.send('erro ao salvar usuario');

				}else{
					res.redirect('/');
				}

			});

		}
	}
	return usuarioController;
}