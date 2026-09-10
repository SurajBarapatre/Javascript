// Task:- 
//-------//

// create a note making app, where user can create upto 150 characters note, 
// user can also add more than one notes, 
// and display all notes in grid view and boxes color should be different for each notes text color should light or dark based on background color, 
// show date and time when note is created, and user can also delete the note by clicking on it.

// Select input field
const input_note = document.getElementById("input-note");                           // Select input field where user can type note

// Select Add Note button
const input_btn = document.getElementById("input-btn");                            // Select Add Note button where user can click to add note

// Select notes container
const notes_box = document.getElementById("notes-box");                            // Select notes container where all notes will be displayed

// Function to create note
const handleCreateNote = () => {                                                   // Function to create note when Add Note button is clicked

    // Get input value
    const value = input_note.value.trim();                                        // Get input value and trim whitespace from both ends

    // Check empty note
    if (value == "") {                                                            // Check if input value is empty
        alert("Please enter a note!");                                           // Alert user to enter a note
        return;                                                                  // Return from function if input value is empty
    }

    // Check 150 character limit
    if (value.length > 150) {                                                   // Check if input value is more than 150 characters    
        alert("Note cannot be more than 150 characters!");                      // Alert user that note cannot be more than 150 characters
        return;                                                                 // Return from function if input value is more than 150 characters
    }

    // Generate random background color
     const color = "#" + Math.floor(Math.random() * 16581375).toString(16);    // Generate random background color in hexadecimal format

    // Create new div
    const div = document.createElement("div");                                 // Create new div element to hold the note

    // Add Bootstrap classes
    div.className = "p-3 rounded shadow";                                      // Add Bootstrap classes to the div element for padding, rounded corners, and shadow effect

    // Set background color
    div.style.backgroundColor = color;                                        // Set background color of the div element to the randomly generated color

    // Calculate brightness of background color
    const r = parseInt(color.substring(1, 3), 16);                           // Get red value from hexadecimal color
    const g = parseInt(color.substring(3, 5), 16);                           // Get green value from hexadecimal color
    const b = parseInt(color.substring(5, 7), 16);                           // Get blue value from hexadecimal color

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;                // Calculate brightness of background color using formula for luminance

    // Set text color according to background
    if (brightness > 150)                                                   // If brightness is greater than 150, set text color to black for better readability
    {
        div.style.color = "black";                                         // Set text color of the div element to black
    } else                                                                 // If brightness is less than or equal to 150, set text color to white for better readability 
    {
        div.style.color = "white";                                         // Set text color of the div element to white
    }

    // Create note text
    const noteText = document.createElement("div");                       // Create new div element to hold the note text

    noteText.textContent = value;                                        // Set text content of the note text div element to the input value

    // Add note text
    div.appendChild(noteText);                                           // Add note text div element to the main div element

    // Get current date and time
    const now = new Date();                                             // Get current date and time

    // Create date/time element
    const dateTime = document.createElement("small");                   // Create new small element to hold the date and time

    dateTime.textContent =                                             // Set text content of the date/time small element to the current date and time in local format
        now.toLocaleDateString() +                                     // Get current date in local format
        " " +                                                          // Add space between date and time
        now.toLocaleTimeString();                                      // Get current time in local format 

    // Style date/time
    dateTime.style.display = "block";                                  // Set display property of the date/time small element to block so that it appears on a new line
    dateTime.style.marginTop = "15px";                                 // Set margin top of the date/time small element to 15px to create space between note text and date/time
    dateTime.style.opacity = "0.8";                                    // Set opacity of the date/time small element to 0.8 to make it slightly transparent

    // Add date/time inside note
    div.appendChild(dateTime);                                        // Add date/time small element to the main div element

    // Add note to notes box
    notes_box.appendChild(div);                                      // Add main div element to the notes container so that it appears on the page

    // Delete note when clicked
    div.addEventListener("click", function ()                       // Add click event listener to the main div element to delete the note when clicked
    {
        div.remove();                                               // Remove the main div element from the notes container when clicked
    });

    // Clear input field
    input_note.value = "";                                         // Clear input field after note is added
};

// Button click event
input_btn.addEventListener("click", handleCreateNote);           // Add click event listener to the Add Note button to call the handleCreateNote function when clicked   
