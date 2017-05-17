$(document).ready(function(){


	// $(document).on('change', '#selectVacina', function(){
	// 	var vacina = $(this).find('option:selected').text();

	// });


	$('#buscaPaciente').on('click', function(){

		$.ajax({
			url: '/buscar',
	        type: 'post',
	        dataType: 'json',
	        data: {sus: $('#susPaciente').val()},
	        error: function(){
	        	res.send('Não foi possível buscar o paciente.');
	        },
	        success: function(paciente){
	        	$('#idPaciente').val(paciente._id);
	        	$('h5#nome').append("Nome: "+paciente.nome ); 
	        	$('#selectVacina').show();
	        	$('#cva').hide();

	        }
		});
	});

});