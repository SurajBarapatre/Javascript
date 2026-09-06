// how to insert a new element inside existing element in javascript

const parentElement = document.getElementById('parent');               // Get the parent element by its ID
const newElement = document.createElement('div');                      // Create a new div element
newElement.textContent = 'New Element';                                // Set the text content of the new element   
parentElement.appendChild(newElement);                                 // Append the new element as a child of the parent element

//--------------------------------OR--------------------------------------//

const container = document.querySelector('#container');      // Get the container element by its ID using querySelector               
const newDiv = document.createElement('div');                // Create a new div element
newDiv.textContent = 'hello world';                          // Set the text content of the new div
container.appendChild(newDiv);                               // Append the new div as a child of the container element



