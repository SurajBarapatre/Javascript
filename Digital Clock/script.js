// create a digital clock when showcase current date and time ,month ,am/pm wise time and 24 hrs type change time

// Select HTML elements
const date = document.getElementById("date");                  // select input field for when can get date     
const time = document.getElementById("time");                 // select input field for when can get time
const ampm = document.getElementById("ampm");                 // select input field for when can get am/pm
const changeBtn = document.getElementById("changeBtn");       // select input field for when can change button


// Default time format
let is24Hour = false;                                          // for 12-hour format will be used.

// Function to show clock
function digitalClock() {                                     // create a function to display clock

    // Create new Date object
    const now = new Date();                                    //Get the current date and time

    // Get date
    let day = now.getDate();                               

    let month = now.toLocaleString("en-US",                   // get month to string by current month   
    {
        month: "long"
    });

    let year = now.getFullYear();                             // get year for full current year

    // Display date
    date.textContent = day + " " + month + " " + year;        // for show date to dd/mm/yy format

    // Get hours, minutes and seconds
    let hours = now.getHours();                              // get hours for display 
    let minutes = now.getMinutes();                          // get minutes for display
    let seconds = now.getSeconds();                          // get seconds for display

    // Add 0 before single digit
    minutes = String(minutes).padStart(2, "0");                // for minutes to string with current digit                        
    seconds = String(seconds).padStart(2, "0");                // for seconds to string with current digit 

    // 12 Hour Format
    if (is24Hour == false) {                                  // for display default 12 hours format
        let period = "AM";                                    // for period to display time AM format

        if (hours >= 12) {                                    // condition check if hours greater than equal to 12 for display PM format
            period = "PM";
        }

        // Convert 24 hour to 12 hour                       // for check condition to get hours greater than 12 and convert to 24 hours format
        if (hours > 12) {
            hours = hours - 12;
        }

        // 0 hour becomes 12  
        if (hours == 0) {                                  // for check condition to get hours equal to 12 and convert 12 hours format 
            hours = 12;
        }
        hours = String(hours).padStart(2, "0");            // for hours to string with current digit 

        // Display time
        time.textContent =                                 // for display to show time current format
            hours + ":" + minutes + ":" + seconds;

        // Display AM / PM
        ampm.textContent = period;                        // for show time by am/pm format
    }

    // 24 Hour Format
    else {
        hours = String(hours).padStart(2, "0");             // for display to time in 24 hours format
        time.textContent =
            hours + ":" + minutes + ":" + seconds;         // for display to show time current format

        // Hide AM / PM
        ampm.textContent = "";                              // for hide to 24 hours format
    }
}

// Change 12 / 24 hour format
changeBtn.addEventListener("click", function () {             // for add event click show 24 hours format to change 12 hours format
    is24Hour = !is24Hour;

    if (is24Hour == true)                                    // check condition to get display time 12 hours format
    {
        changeBtn.textContent =                              // for show time 12 hours format
            "Change to 12 Hours";
    } else 
    {
        changeBtn.textContent =                          // check condition to get display time 24 hours format  
            "Change to 24 Hours";                        // for show time 24 hours format                                            
    }

    digitalClock();                                      
});

// Run clock immediately
digitalClock();

// Update clock every 1 second
setInterval(digitalClock, 1000);
