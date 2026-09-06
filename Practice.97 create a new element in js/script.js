// how to create a element by using JavaScript

// create a new element
var newElement = document.createElement("div");                   // JavaScript creates a new <div> element

//-------------------------OR----------------------------//

const div = document.createElement("div");                        // JavaScript creates another new <div> element

//-------------------------OR----------------------------//

// create a new element with text content
const newElementWithText = document.createElement("p");              // JavaScript creates a new <p> (paragraph) element
newElementWithText.textContent = "This is a new paragraph.";        // Text is added inside the <p> element
document.body.appendChild(newElementWithText);                      // The new <p> element is added to the body of the HTML document, making it visible on the webpage


