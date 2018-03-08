$(document).ready(function(){


	// $(window).resize(function() {
	// 	videoScroll();
	// });

	videoScroll();


});



function videoScroll() {
	var wrapperWidth = $('.video-list-wrapper').width(),
	    i = 1,
	    shift = 0,
	    itemLength = $('.video-list li').width(),
	    numberOfItems = $('.video-list li').length,
	    numberOfItemsOnScreen = (Math.floor(wrapperWidth/itemLength)),
	    remainder = numberOfItems % numberOfItemsOnScreen,
		numberOfTimesToScroll = Math.floor(numberOfItems / numberOfItemsOnScreen),
		itemLengthWithMargin = (itemLength*numberOfItemsOnScreen) + (numberOfItemsOnScreen * 20);

	$('a.next').click(function(){	
		if(i < numberOfTimesToScroll){
			shift = (itemLengthWithMargin * i);
			i++;
			if (i == numberOfTimesToScroll && remainder == 0) {
				next('none');
			}
		} else {
			if(remainder > 0) {
				shift += itemLengthWithMargin * (remainder/numberOfItemsOnScreen);
				next('none');
			}
		}
		prev('block');
		$('.video-list ul').css('transform', 'translate3d(-' + shift + 'px, 0px, 0px)');
	});

	$('a.prev').click(function(){
		if(i > 1){
			i--;
			shift -= itemLengthWithMargin;
		} else {
			if(remainder > 0) {
				shift -= (itemLengthWithMargin * (remainder/numberOfItemsOnScreen));
			}
		}
		if (shift == 0) {
			prev('none');
		}
		next('block');
		$('.video-list ul').css('transform', 'translate3d(-'+ shift + 'px, 0px, 0px)');
	});
}

function next(display) {
	$('.video-list-control a.next').css('display', display);
}

function prev(display) {
	$('.video-list-control a.prev').css('display', display);
}



// function videoScroll() {
// 	var wrapperWidth = $('.video-list-wrapper').width();
// 	var defaultWrapperWidth = wrapperWidth;
// 	var prev

// 	$('a.next').click(function(){	
// 		prev = (wrapperWidth-75)
// 		$('.video-list-control a.prev').css('display', 'block');
// 		// if (wrapperWidth == 615) {
// 		// 	$('.video-list-control a.prev').css('display', 'none');
// 		// }
// 		$('.video-list ul').css('transform', 'translate3d(-' + (wrapperWidth-75) + 'px, 0px, 0px)');
// 		wrapperWidth += (defaultWrapperWidth - 75)
// 	});

// 	$('a.prev').click(function(){
// 		if (defaultWrapperWidth == 345 && wrapperWidth == 615 ||
// 			defaultWrapperWidth == 615 && wrapperWidth == 1155 ||
// 			defaultWrapperWidth == 885 && wrapperWidth == 1695 ||
// 			defaultWrapperWidth == 1155 && wrapperWidth == 2235 ||
// 			defaultWrapperWidth == 1425 && wrapperWidth == 2775) {
// 			$('.video-list-control a.prev').css('display', 'none');
// 		} else {
// 			$('.video-list-control a.prev').css('display', 'block');
// 		}
// 		wrapperWidth = (prev + 75)
// 		prev = (prev - defaultWrapperWidth + 75)
// 		$('.video-list ul').css('transform', 'translate3d(-'+ prev + 'px, 0px, 0px)');
// 	});
// }