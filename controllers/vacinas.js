module.exports = function(app){

	var Vacina = app.models.vacinas;

	var vacinaController = {
		

		create: function(req,res){
			res.render("vacinas/create");
		},

		insert: function(req,res){
			var model = new Vacina(req.body);
			model.save(function(err){
				if(err){
					console.log(err);
				}
				req.flash('info','vacinas cadastrado com sucesso!');
				res.redirect('/vacinas');
			});
		}

		

	
	}
	return vacinaController;
}