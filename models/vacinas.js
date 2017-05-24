
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(){
	

	var vacina = new Schema({
    nome: {type: String},
    dados :[
			{
				data : {type: Date},
				paciente: {type:Schema.ObjectId, ref: 'Paciente', required: true},
				aplicador: {type:Schema.ObjectId, ref: 'Aplicador', required: true}
			}
		]
  });

  return mongoose.model('Vacinas', vacina);



}


