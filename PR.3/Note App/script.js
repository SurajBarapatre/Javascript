// create a note making app, where user can create upto 150 characters note, user can also add more than one notes, and display all notes in grid view and boxes color should be different for each notes.

const input_note = document.getElementById("input-note");                          // input field for note
const input_btn = document.getElementById("input-btn");                           // button to create note
const notes_box = document.getElementById("notes-box");                           // box to display all notes

const handleCreateNote = () => {                                                 // function to create note
  const value = input_note.value; 
                                                                                    // get the value of input field
  const color = "#" + Math.floor(Math.random() * 16581375).toString(16);          // generate random color in hexadecimal format

  const div = document.createElement("div");                                      // create a div element to display note                                    

  div.className = "px-3 py-3 rounded";                                           // add class to div element for styling

  div.style.backgroundColor = color;                                            // set the background color of div element to random color

  div.textContent = value;                                                      // set the text content of div element to the value of input field

  notes_box.appendChild(div);                                                  // append the div element to the notes box

  input_note.value = "";                                                        // clear the input field after creating note

};

input_btn.addEventListener("click", handleCreateNote);                          // add event listener to button to call handleCreateNote function when button is clicked
