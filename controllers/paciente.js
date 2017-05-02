module.exports = function(app){
	
	var pacienteController = {
		
		index:function(req, res){
			res.render('Paciente/index');

		}
	}
	return pacienteController;
}