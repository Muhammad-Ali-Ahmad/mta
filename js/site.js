$(document).ready(function() {
    videoScroll();
});


function firstItemOnScreen2(videoListWrapper, videoListLi) {
    return ((Math.floor(
        $(videoListWrapper).width() / $(videoListLi).width()
    )) / Math.floor($(videoListWrapper).width() / $(videoListLi).width()));
}

function videoScroll() {
    var shift = 0;
    var wrapperWidth;
    var itemLength;
    var numberOfItems;
    var numberOfItemsOnScreen;
    var firstItemOnScreen;
    var itemLengthWithMargin;

    $("a.next").click(function() {
        var that = this;
        currentVideoWrapper = $(that).parents(".video-list-wrapper");
        wrapperWidth = currentVideoWrapper.width();
        itemLength = currentVideoWrapper.find(".video-list li").width();
        numberOfItems = currentVideoWrapper.find(".video-list li").length;
        numberOfItemsOnScreen = (Math.floor(wrapperWidth / itemLength));
        firstItemOnScreen = currentVideoWrapper.attr("data-first-video");
        itemLengthWithMargin = itemLength + 20;

        if (typeof firstItemOnScreen == "undefined") {
            firstItemOnScreen = 1;
        } else {
            firstItemOnScreen = parseInt(firstItemOnScreen, 10)

        }

        var numberOfItemsRemaining = numberOfItems - firstItemOnScreen - (numberOfItemsOnScreen - 1);


        if (numberOfItemsRemaining >= numberOfItemsOnScreen) {
            shift = (firstItemOnScreen + numberOfItemsOnScreen - 1) * itemLengthWithMargin;
            if (numberOfItemsOnScreen == numberOfItemsRemaining) {
                next(currentVideoWrapper, "none");
            }
            firstItemOnScreen += numberOfItemsOnScreen;
        } else {
            shift = (firstItemOnScreen + numberOfItemsRemaining - 1) * itemLengthWithMargin;
            next(currentVideoWrapper, "none");
            firstItemOnScreen += numberOfItemsRemaining;
        }

        prev(currentVideoWrapper, "block");
        currentVideoWrapper.find(".video-list ul").css("transform", "translate3d(-" + shift + "px, 0px, 0px)");
        currentVideoWrapper.attr("data-first-video", firstItemOnScreen);
    });

    $("a.prev").click(function() {
        var that = this,
            currentVideoWrapper = $(that).parents(".video-list-wrapper");
        wrapperWidth = currentVideoWrapper.width();
        itemLength = currentVideoWrapper.find(".video-list li").width();
        numberOfItems = currentVideoWrapper.find(".video-list li").length;
        numberOfItemsOnScreen = (Math.floor(wrapperWidth / itemLength));
        itemLengthWithMargin = itemLength + 20;
        firstItemOnScreen = parseInt(currentVideoWrapper.attr("data-first-video"), 10);
        var numberOfItemsRemaining = firstItemOnScreen - 1;

        if (numberOfItemsRemaining >= numberOfItemsOnScreen) {
            shift = (firstItemOnScreen - numberOfItemsOnScreen - 1) * itemLengthWithMargin;
            firstItemOnScreen -= numberOfItemsOnScreen;
        } else {
            shift = (firstItemOnScreen - numberOfItemsRemaining - 1) * itemLengthWithMargin;
            firstItemOnScreen -= numberOfItemsRemaining;
        }

        if (shift == 0) {
            prev(currentVideoWrapper, "none");
        }
        next(currentVideoWrapper, "block");
        currentVideoWrapper.find(".video-list ul").css("transform", "translate3d(-" + shift + "px, 0px, 0px)");
        currentVideoWrapper.attr("data-first-video", firstItemOnScreen);
    });
}

function next(currentVideoWrapper, display) {
    $(currentVideoWrapper).find(".video-list-control a.next").css("display", display);
}

function prev(currentVideoWrapper, display) {
    $(currentVideoWrapper).find(".video-list-control a.prev").css("display", display);
}

// function videoScroll1() {
// 	var i = 1,
// 	    shift = 0,
// 	    wrapperWidth,
// 	    itemLength,
// 	    numberOfItems,
// 	    numberOfItemsOnScreen,
// 	    remainder,
// 		numberOfTimesToScroll,
// 		itemLengthWithMargin;

// 	$('a.next').click(function(){
// 		wrapperWidth = $('.video-list-wrapper').width(),
// 		itemLength = $('.video-list li').width(),
// 		numberOfItems = $('.video-list li').length,
// 		numberOfItemsOnScreen = (Math.floor(wrapperWidth/itemLength)),
// 		remainder = numberOfItems % numberOfItemsOnScreen,
// 		numberOfTimesToScroll = Math.floor(numberOfItems / numberOfItemsOnScreen),
// 		itemLengthWithMargin = (itemLength*numberOfItemsOnScreen) + (numberOfItemsOnScreen * 20);

// 		if(i < numberOfTimesToScroll){
// 			shift = (itemLengthWithMargin * i);
// 			i++;
// 			if (i == numberOfTimesToScroll && remainder == 0) {
// 				next('none');
// 			}
// 		} else {
// 			if(remainder > 0) {
// 				shift += itemLengthWithMargin * (remainder/numberOfItemsOnScreen);
// 				next('none');
// 			}
// 		}
// 		prev('block');
// 		$('.video-list ul').css('transform', 'translate3d(-' + shift + 'px, 0px, 0px)');
// 	});

// 	$('a.prev').click(function(){
// 		wrapperWidth = $('.video-list-wrapper').width(),
// 		itemLength = $('.video-list li').width(),
// 		numberOfItems = $('.video-list li').length,
// 		numberOfItemsOnScreen = (Math.floor(wrapperWidth/itemLength)),
// 		remainder = numberOfItems % numberOfItemsOnScreen,
// 		numberOfTimesToScroll = Math.floor(numberOfItems / numberOfItemsOnScreen),
// 		itemLengthWithMargin = (itemLength*numberOfItemsOnScreen) + (numberOfItemsOnScreen * 20);

// 		if(i > 1){
// 			i--;
// 			shift -= itemLengthWithMargin;
// 		} else {
// 			if(remainder > 0) {
// 				shift -= (itemLengthWithMargin * (remainder/numberOfItemsOnScreen));
// 			}
// 		}
// 		if (shift == 0) {
// 			prev('none');
// 		}
// 		next('block');
// 		$('.video-list ul').css('transform', 'translate3d(-'+ shift + 'px, 0px, 0px)');
// 	});
// }

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