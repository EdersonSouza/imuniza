module.exports = function(app){
	var userModel = app.models.aplicadorVacina;
	var homeController = {
		index: function(req, res){
			res.render('index');
		},
		home: function(req, res){
			res.render('usuarios/admin');
		},
		autenticar:function(req,res){
			var usuario = new userModel();
			var senha = req.body.senha;
			userModel.findOne({email : req.body.email}, function(err, user){
				if (err){
					req.flash("erro", "erro de autenticação ");
					res.redirect('/');
				}else if(!user){
					req.flash("erro", "usuario não cadastrado ");
					res.redirect('/');

				}else if(user.validPassword(senha, user.senha)){
					req.session.usuario = user;
					console.log(req.session.usuario);
					res.redirect('/logado');
				}else {
					res.send('registro ou senha invalido');
				}
			});
		},
		logout:function(req,res){
			req.session.destroy();
			res.redirect('/');

		}
	}
	return homeController;
}