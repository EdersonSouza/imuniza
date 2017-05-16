module.exports = function(app){
	var userModel = app.models.usuario;
	var usuarioController = {

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