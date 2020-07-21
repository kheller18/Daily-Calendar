Purpose: The purpose of this app is to store daily events in a calendar.  

How it works:
    The application opens, displays todays date, get's the time of the users location, and has time blocks for each hour of the work day.  The time blocks' background color is generated via this key:
        current hour: red
        previous hours: grey
        future hours: green

    The user is able to input calendar events and save them with a corresponding button.  When the user closes the webpage and reopens,
    the saved calendar events will appear.

    The application runs on a continuous timer that will update background colors based on conditional statements.

    When a new day is detected, the calendar wipes clean (local storage is deleted).


See attached screenshot (daily-calendar-screenshot-1209am) in "assets"  for a view of the calendar.
    info: taken at 1209am.
    background color: green, all events are upcoming for the day.