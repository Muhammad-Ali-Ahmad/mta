$(document).ready(function(){
	$('a.next').click(function(){
		$('.video-list ul').css('transform', 'translate3d(-1620px, 0px, 0px)');
	});
	$('a.prev').click(function(){
		$('.video-list ul').css('transform', '');
	});
});