// how to select an element by id,class,tag by only one function

function selectElement(selector) {                                  // this function takes a selector as an argument and returns the corresponding element(s)
    if (selector.startsWith('#')) {                                 // if the selector starts with a '#' it means we are selecting an element by id
        return document.getElementById(selector.slice(1));          // we use slice(1) to remove the '#' from the selector
    } else if (selector.startsWith('.')) {                            // if the selector starts with a '.' it means we are selecting elements by class
        return document.getElementsByClassName(selector.slice(1));   // we use slice(1) to remove the '.' from the selector
    } else {
        return document.getElementsByTagName(selector);              // if the selector does not start with a '#' or '.' it means we are selecting elements by tag name
    }
}   

//------------------------------OR--------------------------------------------//

const heading = document.querySelector('.heading');                  // select the first element with the class 'heading'

const heading1 = document.querySelector('#heading1');                // select the first element with the id 'heading1'

const h2 = document.querySelector('h2');                            // select the first 'h2' element

