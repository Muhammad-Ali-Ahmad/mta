$(document).ready(function() {
    $('.nav-icon').click(function(){
		$('.main--nav-links').slideToggle( "slow");
	});
	$('.additional-nav-icon').click(function(){
		$( ".additional-nav" ).slideToggle( "slow");
	});
});
