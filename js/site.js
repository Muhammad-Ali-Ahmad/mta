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