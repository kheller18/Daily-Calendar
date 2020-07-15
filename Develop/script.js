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
    let correlation = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var save;

    // gets current time in user timezone
    function getTime() {
        console.log(time);
        console.log(date);
        console.log(hours)
        $("#currentDay").text(date);
    }

    function setBackground() {
        getTime();
        if (correlation.includes(hours)) {
            event = $(".event").val(hours);
            console.log(event);
            console.log("hey");
        } else {
            $(".event").addClass("past");
            console.log("yo");
        }
    }

    // handles submit
    $(".saveBtn").on("click", function() {
        // get text inside textbox
        save = $(this).val();
        console.log(save);
    })


    setBackground();
  //  getTime();
});