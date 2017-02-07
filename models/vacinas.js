module.exports = function(){
	var mongoose = require('mongooose');
	var Schema = mongooose.Schema();

	var vacina = new Schema({
    nome: String 
  });

  return mongoose.model('vacinas', vacina);



}


