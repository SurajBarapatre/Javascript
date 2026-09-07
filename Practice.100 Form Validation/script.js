const inputName = document.getElementById("input-name");                  // we fetch the name-input box by id and store into variable.
const inputEmail = document.getElementById("input-email");               // we fetch the email-input box by id and store into variable.
const inputPhone = document.getElementById("input-phone");               // we fetch the phone-input box by id and store into variable.
const inputAge = document.getElementById("input-age");                   // we fetch the age-input box by id and store into variable.

const submitBtn = document.getElementById("submit-btn");                 // we fetch the submit button by id and store into variable.

const outputName = document.getElementById("output-name");               // we fetch the name-output box by id and store into variable.
const outputEmail = document.getElementById("output-email");             // we fetch the email-output box by id and store into variable.
const outputPhone = document.getElementById("output-phone");             // we fetch the phone-output box by id and store into variable.
const outputAge = document.getElementById("output-age");                 // we fetch the age-output box by id and store into variable.

const handleSubmit = () => {                                            // we create a function to handle submit button click event.

  outputName.textContent = "";                                         // we clear previous entry on new submit click on name output box.
  outputEmail.textContent = "";                                        // we clear previous entry on new submit click on email output box.
  outputPhone.textContent = "";                                        // we clear previous entry on new submit click on phone output box.
  outputAge.textContent = "";                                          // we clear previous entry on new submit click on age output box.


  const name = inputName.value;                                         // we fetch data from name textfield/input box and store into new variable.          
  const email = inputEmail.value;                                       // we fetch data from email textfield/input box and store into new variable.
  const phone = inputPhone.value;                                       // we fetch data from phone textfield/input box and store into new variable.
  const age = inputAge.value;                                           // we fetch data from age textfield/input box and store into new variable.

  // check phone length by if condition.

  if (phone.length != 10) {                                             // we check phone number length, if not equal to 10 then show alert.
    alert("Enter valid phone number !");                                // we show alert message to user.
    return;                                                             // we return from function, so that next code will not execute.
  }

  // check age length by if condition - age must less than 100 and greater than 0

  if (age > 100 || age <= 0) {                                            // we check age number, if greater than 100 or less than equal to 0 then show alert.
    alert("Enter valid age number !");                                    // we show alert message to user.
    return;                                                               // we return from function, so that next code will not execute.
  }

  // Output values --->

  // variable value -:> output element set/print.

  outputName.textContent = name;                                        // we set the value of name variable to output element.
  outputEmail.textContent = email;                                      // we set the value of email variable to output element.
  outputPhone.textContent = phone;                                      // we set the value of phone variable to output element.
  outputAge.textContent = age;                                          // we set the value of age variable to output element.
};

submitBtn.addEventListener("click", handleSubmit);                    // we add click event listener to submit button, when user click on submit button then handleSubmit function will execute.
