
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(){
	

	var vacina = new Schema({
    nome: String 
  });

  return mongoose.model('vacinas', vacina);



}


