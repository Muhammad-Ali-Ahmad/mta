var s = "11:00";
var e = "12:00";



function getProgrammeLength(start, end) {
    "use strict";
    var hour = end[0] - start[0];
    var minutes = end[1] - start[1];

    if (hour < 0) {
        hour += 24;
    }
    if (minutes < 0) {
        minutes += 60;
        hour -= 1;
    }
    return {hour: hour, minutes: minutes, totalMinutes: minutes + (hour * 60)};
}


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

function programmeBarPrecentage(start, end) {
    "use strict";
    start = start.split(":");
    end = end.split(":");
    var now = new Date();
    var programmeLength = getProgrammeLength(start, end);
    var programmeEnd = getProgrammeEnd(now, start, end, programmeLength.hour, programmeLength.minutes);
    var minutesRemaining = (programmeEnd.getTime() - now.getTime()) / 60000;
    var precentage = Math.floor(100 - ((minutesRemaining / programmeLength.totalMinutes) * 100));

    if (precentage < 0) {
        return 0;
    } else if (precentage > 100) {
        return 100;
    } else {
        return precentage;
    }
}
// custom time
//    var now = new Date((1516109400*1000));




// function getStartTime(x) {
//     return jQuery('.date-display-start').get(x).innerText;
// }

// function getEndTime(x) {
//     return jQuery('.date-display-end').get(x).innerText;
// }

jQuery(document).ready(function(){
 
    var mta1Progress = programmeBarPrecentage(s, e);

    jQuery('.mta1LiveProgress').css('width', mta1Progress + '%');
});





----------------------------------------------------------


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

function programmeBarPrecentage(dateTime) {
    "use strict";
    var start = new Date(dateTime.startDateObj);
    var end = new Date(dateTime.endDateObj);
    var programmeLength = (end.getTime() - start.getTime()) / 60000;
    //var programmeEnd = getProgrammeEnd(start, end, programmeLength.hour, programmeLength.minutes);
    var minutesRemaining = (end.getTime() - start.getTime()) / 60000;
    var precentage = Math.floor(100 - ((minutesRemaining / programmeLength.totalMinutes) * 100));

    if (precentage < 0) {
        return 0;
    } else if (precentage > 100) {
        return 100;
    } else {
        return precentage;
    }
}

function getDateTime(x) {
    return {startDateObj: jQuery('.date-display-start').get(x).getAttribute('content'),
            endDateObj: jQuery('.date-display-end').get(x).getAttribute('content')}
}

jQuery(document).ready(function(){
 
    var mta1Progress = programmeBarPrecentage(getDateTime(0));
    var mta2Progress = programmeBarPrecentage(getDateTime(1));
    var mta3Progress = programmeBarPrecentage(getDateTime(2));
    var mta4Progress = programmeBarPrecentage(getDateTime(3));

    jQuery('.mta1LiveProgress').css('width', mta1Progress + '%');
    jQuery('.mta2LiveProgress').css('width', mta2Progress + '%');
    jQuery('.mta3LiveProgress').css('width', mta3Progress + '%');
    jQuery('.mta4LiveProgress').css('width', mta4Progress + '%');
});