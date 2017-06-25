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
	        error: function(req){
	        	req.flash('erro','Não foi possível buscar o paciente.');
	        },
	        success: function(paciente){
	        	$('#idPaciente').val(paciente._id);
	        	$('h5#nome').append("Nome: "+paciente.nome ); 
	        	$('#selectVacina').show();
	        	$('#cva').hide();

	        }
		});
	});

	$('.mod-edit').on('click', function(){
		$('#form').show();

		
	});

	$('#aplicar').on('click', function(){

		$('#form').show();
		$('.tab').hide();
		$('#pac').hide();
		$('#min').show();

		

		
	});

	$('.editar').click(function(){
	    $('input, select').removeAttr('disabled');
	    $('.atualizar').show();
	    $('.editar').hide();
	   
  });

 $('.calend').pickadate({
    // Day states
    day: 'picker__day',
    disabled: 'picker__day--disabled',
    selected: 'picker__day--selected',
    highlighted: 'picker__day--highlighted',
    now: 'picker__day--today',
    infocus: 'picker__day--infocus',
    outfocus: 'picker__day--outfocus',
    selectYears: 200,
    selectMonths: true,

    // The picker footer
    footer: 'picker__footer',
});

 $('#Imprimir').click(function() {
		window.print();
		return false;
	});


});