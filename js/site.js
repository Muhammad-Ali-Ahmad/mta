$(document).ready(function(){


	$(window).resize(function() {
		videoScroll();
	});

	videoScroll();
});

function videoScroll() {
	var wrapperWidth = $('.video-list-wrapper').width();
	var defaultWrapperWidth = wrapperWidth;
	var prev

	$('a.next').click(function(){	
		prev = (wrapperWidth-75)
		$('.video-list ul').css('transform', 'translate3d(-' + (wrapperWidth-75) + 'px, 0px, 0px)');
		wrapperWidth += (defaultWrapperWidth - 75)
	});

	$('a.prev').click(function(){
		wrapperWidth = (prev + 75)
		prev = (prev - defaultWrapperWidth + 75)
		$('.video-list ul').css('transform', 'translate3d(-'+ prev + 'px, 0px, 0px)');
	});
}