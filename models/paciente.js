var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(){
	var paciente = mongoose.Schema({
		nome: 	{type: String,trim:true},
		nasc:   {type: Date},
		rg: 	{type: String,trim:true},
		cpf: 	{type: String,trim:true, unique: true},
		email: 	{type: String,trim: true},
		sexo: 	{type: String},
		sus:    {type: String},
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
		telefone:{type: String,trim:true},
		vacinas :[
			{
				data : {type: Date},
				vacina: {type: Schema.ObjectId, ref: 'Vacinas', required: true}
			}
		]

	});

	return mongoose.model('Paciente', paciente);
}