var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

module.exports = function(){
	var aplicadorVacina = mongoose.Schema({
		nome: 	{type: String,trim:true},
		nasc:   {type: Date},
		rg: 	{type: String,trim:true},
		cpf: 	{type: String,trim:true, unique: true},
		email: 	{type: String,trim: true, unique:true},
		senha:  {type: String}, 
		sexo: 	{type: String},
		coren:    {type: String},
		tipo:     {type: String},
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
				vacina: {type: Schema.ObjectId, ref: 'Vacinas', required: true},
				paciente: {type:Schema.ObjectId, ref: 'Paciente', required: true},
				doze: {type: String}
			}
		]


	});

	aplicadorVacina.methods.generateHash = function(senha){
		return bcrypt.hashSync(senha, bcrypt.genSaltSync(5),null);
	};
	aplicadorVacina.methods.validPassword =function(senha){
		return bcrypt.compareSync(senha, this.senha);
	};

	return mongoose.model('Aplicador', aplicadorVacina);
}