// only load javascript once HTML has been loaded correctly
$(document).ready(function() {
    let date = moment().format("MMMM Do YYYY");
    let time = moment().format("hh:mm:ss");
    let hours = moment().format("HH");
    let event;
    let events = [{"9": ""}, {"10": ""}, {"11": ""}, {"12": ""}, {"13": ""}, {"14": ""}, {"15": ""}, {"16": ""}, {"17": ""}];
    let eventsC = [{"9": "", "10": "", "11": "", "12": "", "13": "", "14": "", "15": "", "16": "", "17": ""}];
    var index;
    let correlation = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    const eventIds = ["#9", "#10", "#11", "#12", "#13", "#14", "#15", "#16", "#17"];
    var save;
    var saveString;
    

    function getTime() {
        //console.log(time);
        //console.log(date);
        //console.log(hours);
        if (time === ) 
        $("#currentDay").text(date);
    }

    function setBackground() {
        var z;
        getEvents();
        getTime();

        if (correlation.includes(parseInt(hours))) {
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
        //console.log(get);
        for (i = 0; i < get.length; i++) {// change from get to something else

            if (get[i] == null) {
                console.log("hello");
            } else if (typeof get[i] === 'object') {
                get[i] = "";
            } else {
                //console.log(get[i]);
            }

            $(eventIds[i]).val(get[i]);
            //console.log(eventIds[i]);
            //console.log(get[i]);
        }
        //console.log(get.length);
        //console.log(get);
    }


    setBackground();
  //  getTime();
});