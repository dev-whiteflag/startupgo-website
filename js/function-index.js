document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid', 'googleCalendar'],
        googleCalendarApiKey: 'AIzaSyDRCvZHyGCiPZMpM1RUNO4WFj5XN71hduE',
        eventSources: [
            {
                googleCalendarId: 'n7qhk1t35edo7m9p1gqgfl8ovk@group.calendar.google.com',
                lazyFetching: true
            }
        ],
    });
    
    calendar.setOption('locale', 'br');
    calendar.render();
});

$.getJSON("http://jsonip.com?callback=?", function (data) {
        $("#ipAddress").val(data.ip);
        console.log($("#ipAddress").val())
});