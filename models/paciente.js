var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(){
	var paciente = mongoose.Schema({
		nome: 	{type: String,trim:true},
		nasc:   {type: Date},
		rg: 	{type: String,trim:true},
		cpf: 	{type: String,trim:true, unique: true},
		renach: {type: String,trim:true},
		email: 	{type: String,trim: true},
		sexo: 	{type: String},
		pais: 	{
			pai: {type: String,trim:true},
			mae: {type: String,trim:true}
		},
		endereco: {
			rua: 	{type: String,trim:true},
			numero: {type: Number},
			bairro: {type: String,trim:true},
			cep: 	{type: String,trim:true},
			cidade: {type: String,trim:true},
			uf: 	{type: String,trim:true},
		},
		telefones:{
			res: {type: String,trim:true},
			cel: {type: String,trim:true},
			opc: {type: String,trim:true}
		}

	});

	return mongoose.model('Paciente', paciente);
}