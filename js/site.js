$(document).ready(function(){


	// $(window).resize(function() {
	// 	videoScroll();
	// });

	videoScroll();


	console.log($('.video-list li').length);
});

function videoScroll() {
	var wrapperWidth = $('.video-list-wrapper').width();
	var defaultWrapperWidth = wrapperWidth;
	var prev

	$('a.next').click(function(){	
		prev = (wrapperWidth-75)
		$('.video-list-control a.prev').css('display', 'block');
		// if (wrapperWidth == 615) {
		// 	$('.video-list-control a.prev').css('display', 'none');
		// }
		$('.video-list ul').css('transform', 'translate3d(-' + (wrapperWidth-75) + 'px, 0px, 0px)');
		wrapperWidth += (defaultWrapperWidth - 75)
	});

	$('a.prev').click(function(){
		console.log(defaultWrapperWidth)
		if (defaultWrapperWidth == 345 && wrapperWidth == 615) {
			$('.video-list-control a.prev').css('display', 'none');
		} else if (defaultWrapperWidth == 615 && wrapperWidth == 1155) {
			$('.video-list-control a.prev').css('display', 'none');
		} else if (defaultWrapperWidth == 885 && wrapperWidth == 1695) {
			$('.video-list-control a.prev').css('display', 'none');
		} else if (defaultWrapperWidth == 1155 && wrapperWidth == 2235){
			$('.video-list-control a.prev').css('display', 'none');
		} else if (defaultWrapperWidth == 1425 && wrapperWidth == 2775) {
			$('.video-list-control a.prev').css('display', 'none');
		} else {
			$('.video-list-control a.prev').css('display', 'block');
		}
		wrapperWidth = (prev + 75)
		prev = (prev - defaultWrapperWidth + 75)
		$('.video-list ul').css('transform', 'translate3d(-'+ prev + 'px, 0px, 0px)');
	});
}