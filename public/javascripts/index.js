$(document).ready(function(){

	 $('.datepicker').pickadate({
	 	selectMonths: true,
	 	selectYears: 100
	 });
	 $('.carousel').carousel();
	 $('.collapsible').collapsible();
	 $('ul.tabs').tabs();

	 $(".button-collapse").sideNav();
	 $(".collapsible").collapsible();

	 $(".dropdown-button").dropdown();
	 $('select').material_select();
	 $('.cpf').mask('000.000.000-00');
	 $('.cep').mask('00000-000');
	 $('.fone').mask('(00) 0000-00009');

	 $(".msg").fadeTo(2000, 1000).slideUp(800, function(){
      	$(".msg").slideUp(2000);
  	 });

    $('table.display').DataTable();
  })

