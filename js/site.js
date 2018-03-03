$(document).ready(function(){


	// $(window).resize(function() {
	// 	videoScroll();
	// });

	videoScroll();


	console.log($('.video-list li').length);
});

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


function videoScroll() {
	var wrapperWidth = $('.video-list-wrapper').width(),
	    defaultWrapperWidth = wrapperWidth,
	    prev,
	    i = 1,
	    itemLength,
	    numberOfItems,
	    numberOfItemsOnScreen,
	    remainder,
	    numberOfTimesToScroll;

	$('a.next').click(function(){	
		itemLength = $('.video-list li').width(),
		numberOfItems = $('.video-list li').length,
		numberOfItemsOnScreen = (Math.floor(defaultWrapperWidth/itemLength)),
		remainder = numberOfItems % numberOfItemsOnScreen,
		numberOfTimesToScroll = Math.floor(numberOfItems / numberOfItemsOnScreen);

		if(i < numberOfTimesToScroll){
			shift = (((itemLength*numberOfItemsOnScreen) + (numberOfItemsOnScreen * 20)) * i)
			i++
		} else {
			if(remainder > 0) {
				shift = (((itemLength*numberOfItemsOnScreen) + (numberOfItemsOnScreen * 20)) * (i * (remainder/numberOfItemsOnScreen)))
				remainder = 0;
			}
		}

		if (i == numberOfTimesToScroll && remainder == 0) {
			$('.video-list-control a.next').css('display', 'none');
		}
		$('.video-list-control a.prev').css('display', 'block');

		// prev = (wrapperWidth-75)

		$('.video-list ul').css('transform', 'translate3d(-' + shift + 'px, 0px, 0px)');
		// wrapperWidth += (defaultWrapperWidth - 75)
	});

	$('a.prev').click(function(){
		
		remainder = numberOfItems % numberOfItemsOnScreen;

console.log(i)

		if(i >= numberOfTimesToScroll){
			i--
			shift -= (((itemLength*numberOfItemsOnScreen) + (numberOfItemsOnScreen * 20)) * i)
		} else {
			if(remainder > 0) {
				remainder--
				shift -= (((itemLength*numberOfItemsOnScreen) + (numberOfItemsOnScreen * 20)) * (i * (remainder/numberOfItemsOnScreen)))
			}
		}

		$('.video-list-control a.next').css('display', 'block');

		$('.video-list ul').css('transform', 'translate3d(-'+ shift + 'px, 0px, 0px)');
	});
}