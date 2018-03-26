var s = "11:00";
var e = "12:00";




function getProgrammeEnd(now, start, end, hour, minutes) {
    "use strict";
    var endingHour;
    var endingMinutes;
    var day = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();
    var hourNow = now.getHours();

    endingMinutes = Number(start[1]) + minutes;
    endingHour = Number(start[0]) + hour;

    if (endingMinutes > 60) {
        endingMinutes -= 60;
        endingHour += 1;
    }

    if (endingHour >= 24) {
        endingHour -= 24;
        var midnight;
        if (Number(start[0]) >= 21 && Number(end[0] < 3) && hourNow >= 21) {
            midnight = new Date(month + 1 + " " + (day + 1) + ", " + year + " 00:00:00");
        } else {
            midnight = new Date(month + 1 + " " + day + ", " + year + " 00:00:00");
        }

        if (now.getTime() < midnight.getTime()) {
            day += 1;
        }
    }

    return new Date(year, month, day, endingHour, endingMinutes, 0);
}

function programmeBarPrecentage() {
    "use strict";
    var startDateObj =  $('.date-display-start').get(0).getAttribute('content');
    var endDateObj = $('.date-display-end').get(0).getAttribute('content');
    var start = new Date(startDateObj);
    var end = new Date(endDateObj);
    var now = new Date();
    var timeDiff = now.getTimezoneOffset();
    var utcNow;

    if (timeDiff < 0) {
        utcNow = (start.getTime() / 60000) + timeDiff;
    } else if (timeDiff > 0) {
        utcNow = (start.getTime() / 60000) - timeDiff;
    } else {
        utcNow = start.getTime();
    }

    var programmeLength = (end.getTime() - start.getTime()) / 60000;
    //var programmeEnd = getProgrammeEnd(start, end, programmeLength.hour, programmeLength.minutes);
    var minutesRemaining = ((end.getTime() / 60000) - utcNow);
    var precentage = Math.floor(100 - ((minutesRemaining / programmeLength.totalMinutes) * 100));

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