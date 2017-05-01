module.exports = function(app){

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
			var model = new Vacina(req.body);
			model.save(function(err){
				if(err){
					console.log(err);
				}
				//req.flash('info','vacinas cadastrado com sucesso!');
				res.redirect("/lista");
			});
		}

		

	
	}
	return vacinaController;
}