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
    var save;

    function getTime() {
        console.log(time);
        console.log(date);
        $("#currentDay").text(date);
    }

    $(".saveBtn").on("click", function() {
        save = $(this).val();
        console.log(save);
    })

    getTime();
});