var s = "23:15";
var e = "00:30";


function programmeBarPrecentage(start, end) {
    "use strict";
    start = start.split(":");
    end = end.split(":");
    var now = new Date("March 23, 2018 23:45:00"),
        day = now.getDate(),
        month = now.getMonth(),
        year = now.getFullYear(),
        programmeStart = new Date(year, month, day, start[0], start[1], 0),
        programmeEnd = new Date(year, month, day, end[0], end[1], 0);

        // if(end[0] == '00'){
        //     programmeEnd.setDate(programmeEnd.getDate() + 1);
        // }

        var programmeLength = programmeEnd.getTime() - programmeStart.getTime(),
        programmeLengthInMinutes = programmeLength / 1000 / 60,
        playedsofar = programmeEnd.getTime() - now.getTime(),
        minutesRemaining = playedsofar / 60000,
        precentage = Math.floor(100 - ((minutesRemaining / programmeLengthInMinutes) * 100));

    if(precentage < 0) {
        return 0
    } else if (precentage > 100) {
        return 100
    } else {
        return precentage
    }
    // if(precentage > 0 && precentage <= 100) {
    //     return precentage
    // } else {
    //     return 100
    // }
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