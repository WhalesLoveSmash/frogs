const dayStart = "07:30";
const dayEnd = "17:45";

function timeToMinutes(timeStr) {
    let [hourStr, minuteStr] = timeStr.split(":");
    let hours = parseInt(hourStr, 10);
    let minutes = parseInt(minuteStr, 10);
    let totalMinutes= (hours * 60) + minutes;
    return totalMinutes
}

function scheduleMeeting(startTime,durationMinutes) {
    let dayStartSinceMid = timeToMinutes(dayStart);
    let dayEndSinceMid = timeToMinutes(dayEnd);

    let startTimeMinSinceMid = timeToMinutes(startTime);
    let finishTimeSinceMid = startTimeMinSinceMid + durationMinutes;
    
    let startsOnTime = startTimeMinSinceMid >= dayStartSinceMid;
    let endsOnTime = finishTimeSinceMid <= dayEndSinceMid;
    
    return startsOnTime && endsOnTime;
}

//scheduleMeeting("7:00",15);     // false
//scheduleMeeting("7:30",30);     // true

/*
Practicing Comparisons
Let's practice working with value types and comparisons (Chapter 4, Pillar 3) where coercion will need to be involved.

scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration (number of minutes).
It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd);
return false if the meeting violates the work day bounds.
*/