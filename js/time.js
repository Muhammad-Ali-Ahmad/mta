var s = "11:00";
var e = "12:00";




function programmeBarPrecentage() {
    "use strict";
    var start = new Date($(".date-display-start").get(0).getAttribute("content"));
    var end = new Date($(".date-display-end").get(0).getAttribute("content"));
    var now = new Date();
    var timeDiff = now.getTimezoneOffset();
    var programmeLength = (end.getTime() - start.getTime()) / 60000;
    var utcNow;
    var utcEnd;

    if (timeDiff < 0) {
        utcNow = new Date(now.setMinutes((now.getMinutes()) + timeDiff));
        utcEnd = new Date(end.setMinutes((end.getMinutes()) + timeDiff));
    } else if (timeDiff > 0) {
        utcNow = now.setMinutes((now.getMinutes() / 60000) - timeDiff);
        utcEnd = end.setMinutes((end.getMinutes() / 60000) - timeDiff);
    } else {
        utcNow = now.getTime();
        utcEnd = end.getTime();
    }
    var minutesRemaining = (utcEnd - utcNow) / 60000;
    var precentage = Math.floor(100 - ((minutesRemaining / programmeLength) * 100));

    if (precentage < 0) {
        return 0;
    } else if (precentage > 100) {
        return 100;
    } else {
        return precentage;
    }
}



// function getStartTime(x) {
//     return jQuery('.date-display-start').get(x).innerText;
// }

// function getEndTime(x) {
//     return jQuery('.date-display-end').get(x).innerText;
// }

$(document).ready(function(){
 
    var mta1Progress = programmeBarPrecentage();

    $('.mta1LiveProgress').css('width', mta1Progress + '%');
});





// ----------------------------------------------------------



// function getDateTime(x) {
//     return {startDateObj: jQuery('.date-display-start').get(x).getAttribute('content'),
//             endDateObj: jQuery('.date-display-end').get(x).getAttribute('content')}
// }

// jQuery(document).ready(function(){
 
//     var mta1Progress = programmeBarPrecentage(getDateTime(0));
//     var mta2Progress = programmeBarPrecentage(getDateTime(1));
//     var mta3Progress = programmeBarPrecentage(getDateTime(2));
//     var mta4Progress = programmeBarPrecentage(getDateTime(3));

//     jQuery('.mta1LiveProgress').css('width', mta1Progress + '%');
//     jQuery('.mta2LiveProgress').css('width', mta2Progress + '%');
//     jQuery('.mta3LiveProgress').css('width', mta3Progress + '%');
//     jQuery('.mta4LiveProgress').css('width', mta4Progress + '%');
// });