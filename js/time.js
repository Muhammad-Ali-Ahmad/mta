var s = "23:00";
var e = "02:15";


function programmeBarPrecentage(start, end) {
    "use strict";
    start = start.split(":");
    end = end.split(":");
    var now = new Date("March 25, 2018 00:15:00"),
        programmeLength = getProgrammeLength(start, end),
        programmeEnd = getProgrammeEnd(now, start, end, programmeLength["hour"], programmeLength["minutes"]),
        minutesRemaining = (programmeEnd.getTime() - now.getTime()) / 60000,
        precentage = Math.floor(100 - ((minutesRemaining / programmeLength["totalMinutes"]) * 100));

    if(precentage < 0) {
        return 0
    } else if (precentage > 100) {
        return 100
    } else {
        return precentage
    }
}


function getProgrammeLength (start, end) {
    var hour = end[0] - start[0],
        minutes = end[1] - start[1];

        if (hour < 0) {
            hour += 24
        }
        if (minutes < 0) {
            minutes += 60;
            hour--;
        }
        return {hour: hour, 
                minutes: minutes,
                totalMinutes: minutes+(hour*60)}
}


function getProgrammeEnd(now, start, end, hour, minutes) {
        var endingHour,
        endingMinutes,
        endingDate,
        day = now.getDate(),
        month = now.getMonth(),
        year = now.getFullYear(),
        hourNow = now.getHours(),
        midnight = new Date(month+1 + " " + day +", " + year + " 23:59:59");

        endingMinutes  = Number(start[1]) + minutes;
        endingHour = Number(start[0]) + hour;

        if (endingMinutes > 60) {
            endingMinutes -= 60;
            endingHour++
        }

        if(endingHour >= 24) {
            endingHour -= 24;
            if(now.getTime() < midnight.getTime()) {
                day++;
            }
        }

        return new Date(year, month, day, endingHour, endingMinutes, 0);
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