var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

module.exports = function(){
	

	var usuario = new Schema({
    nome: String, 
    registro: String,
    senha: String
  });

	usuario.methods.generateHash = function(senha){
		return bcrypt.hashSync(senha, bcrypt.genSaltSync(5),null);
	};
	usuario.methods.validPassword =function(senha){
		return bcrypt.compareSync(senha, this.senha);
	};

  return mongoose.model('usuario', usuario);



}