$(document).ready(function () {
	$('.tickbox').click(function() {
		$(this).find('.icon-tick').toggle();});
	/*$('.sandwich-menu').click(function() {
	  $(this).addClass('active');  $('ul.header-container__nav').addClass('active').show();});*/
	$('.sandwich-menu').click(function() {
	  $('.sandwich-menu.active').removeClass('active');
	    $(this).addClass('active');
	      $('ul.header-container__nav').show();});
    svg4everybody({});
});