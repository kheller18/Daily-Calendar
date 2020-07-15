/*
    function to get users time-zone
        done

    function to get current date and time
        store date and print to top of page
        store time

    function to get calendar input values from local memory
        store values to an array

    function to display correct colors
        get time from other function
            display gray background for past
            display red background for current
            display green background for future

    function to save values and store them in local memory
*/

//console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

$(document).ready(function() {
    let date = moment().format("MMMM Do YYYY");
    let time = moment().format("h:mm:ss a");
    let hours = moment().format("HH");
    let event;
    let events = [{"9": ""}, {"10": ""}, {"11": ""}, {"12": ""}, {"13": ""}, {"14": ""}, {"15": ""}, {"16": ""}, {"17": ""}];
    let eventsC = [{"9": "", "10": "", "11": "", "12": "", "13": "", "14": "", "15": "", "16": "", "17": ""}];
    
    //console.log(eventsC);
    let correlation = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    const eventIds = ["#9", "#10", "#11", "#12", "#13", "#14", "#15", "#16", "#17"];
    //console.log(eventIds)
    var save;
    var saveString;
    

    function getTime() {
        //console.log(time);
        //console.log(date);
        //console.log(hours)
        $("#currentDay").text(date);
    }

    function setBackground() {
        getEvents();
        getTime();
        if (correlation.includes(hours)) {
            event = $(".event").val(hours);
            console.log(event);
            console.log("hey");
        } else {
            $(".event").addClass("past");
            //console.log(event + "hi");
        }
    }

    // handles submit
    $(".saveBtn").on("click", function() {
        var i;
        //window.localStorage.setItem("events", JSON.stringify(events));
        save = $(this).val();
        i = eventIds[save - 9]; //
        event = $(i).val();
        console.log(save);
        console.log(event);
        //console.log(i);
        if (JSON.parse(localStorage.getItem("events")) != null) {
            events = JSON.parse(localStorage.getItem("events"));
        }
        events[save - 9] = event;
        console.log(events);
        
        window.localStorage.setItem("events", JSON.stringify(events));
    });

    function getEvents() {
        var get = [];
        if (JSON.parse(localStorage.getItem("events")) != null) {
            get = JSON.parse(localStorage.getItem("events"));
        }
        console.log(get);
        for (i = 0; i < get.length; i++) {// change from get to something else

            if (get[i] == null) {
                console.log("hello");
            } else if (typeof get[i] === 'object') {
                get[i] = "";
            } else {
                console.log(get[i]);
            }

            $(eventIds[i]).val(get[i]);
            //console.log(eventIds[i]);
            //console.log(get[i]);
        }
        console.log(get.length);
        console.log(get);
    }


    setBackground();
  //  getTime();
});