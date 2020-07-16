// only load javascript once HTML has been loaded correctly
$(document).ready(function() {

    // declaring initial variables
    let date = moment().format("MMMM Do YYYY");
    let time = moment().format("hh:mm:ss a");
    let hours = moment().format("HH");
    let minutes = moment().format("mm:ss");
    let event;
    let events = [{"9": ""}, {"10": ""}, {"11": ""}, {"12": ""}, {"13": ""}, {"14": ""}, {"15": ""}, {"16": ""}, {"17": ""}];
    var index;
    let correlation = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    const eventIds = ["#9", "#10", "#11", "#12", "#13", "#14", "#15", "#16", "#17"];
    var save;

    // gets the time at the users location and calls related functions based on time of day
    function getTime() {
        window.setInterval(function() {
            time = moment().format("hh:mm:ss a");
            minutes = moment().format("mm:ss");
            console.log(minutes);
            if (time == "00:00:00 am") {
                $("#currentDay").text(date);
                localStorage.removeItem("events");
                getEvents();
            } 
            if (minutes == "00:00") {
                $(".event").removeClass("past present future")
                setBackground();
            }
        }, 1000);
        $("#currentDay").text(date);
        setBackground();
    }

    // sets the color of the background color based on the current time at users location
    function setBackground() {
        hours = moment().format("HH");
        console.log(hours);
        getEvents();

        if (correlation.includes(parseInt(hours))) {
            console.log('wrong')
            index = correlation.indexOf(parseInt(hours));
            for (z = 0; z < index; z++) {
                $(eventIds[z]).addClass("past");
            }
            for (z = index+1; z < correlation.length; z++) {
                $(eventIds[z]).addClass("future");
            }
            $(eventIds[index]).addClass("present");
        } else {
            $(".event").addClass("past");
        }
    }

    // handles user saving an event and saves it to local storage for that respective timeslot
    $(".saveBtn").on("click", function() {
        save = $(this).val();
        event = $(eventIds[save - 9]).val().trim();

        if (JSON.parse(localStorage.getItem("events")) != null) {
            events = JSON.parse(localStorage.getItem("events"));
        }

        events[save - 9] = event;
        window.localStorage.setItem("events", JSON.stringify(events));
    });

    // gets events from local storage and displays them in each respective timeslot
    function getEvents() {
        var get = [];

        if (JSON.parse(localStorage.getItem("events")) != null) {
            get = JSON.parse(localStorage.getItem("events"));
        } else {
            $(".event").val('');
        }

        for (i = 0; i < get.length; i++) {
            if (get[i] === null || typeof get[i] === 'object') {
                get[i] = "";
            }
            $(eventIds[i]).val(get[i]);
        }
    }

    // kicks off the application
    getTime();
});