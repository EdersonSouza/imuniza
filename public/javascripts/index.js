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

	  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
	 
  });

