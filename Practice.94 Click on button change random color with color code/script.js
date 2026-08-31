// every click new and random color in body background by color code , default color should be - #ffffff

let btn = document.getElementById("btn");

btn.addEventListener("click", function()
{
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);   // Random number generate karta hai between 0 and 1 aur RGB ke maximum hexadecimal color value tak random number generate karta hai, # add karke color code banata hai

    document.body.style.backgroundColor = randomColor;                          // isse body ka background change hota hai 
                                                                                // Math.floor() Decimal number ko integer mein convert karta hai, to string(16) Number ko hexadecimal format mein convert karta hai
    console.log("New Color Code =", randomColor);                               // isse new random color by color code generate hote dikhenge                         
});


// dry run -

// Note - Math.random() gives a different value every time, so the exact color cannot be known in advance.

// let's assume the random value generated is 0.50

// step 1: document.getElementById("btn")
//         Button with id "btn" is selected.

// step 2: btn = button element

// step 3: addEventListener("click", function())
//         Click event is added to the button.

// step 4: User clicks the button.

// step 5: Math.random() = 0.5
//         (Assume random value = 0.5)

// step 6: Math.random() * 16777215
//         = 0.5 * 16777215
//         = 8388607.5

// step 7: Math.floor(8388607.5)
//         = 8388607

// step 8: 8388607.toString(16)
//         = "7fffff"

// step 9: "#" + "7fffff"
//         = "#7fffff"

// step 10: randomColor = "#7fffff"

// step 11: document.body.style.backgroundColor = randomColor

// step 12: Body background color becomes "#7fffff"

// step 13: console.log("New Color Code =", randomColor)

// final output:
// New Color Code = #7fffff



// | Step | Code / Operation |           Value              |
// | ---- | ---------------- | --------------------------   |
// | 1    | `btn`            | Button element               |
// | 2    | `Math.random()`  | `0.5` *(assumed)*            |
// | 3    | `0.5 × 16777215` | `8388607.5`                  | 
// | 4    | `Math.floor()`   | `8388607`                    |
// | 5    | `.toString(16)`  | `"7fffff"`                   |
// | 6    | Add `#`          | `"#7fffff"`                |
// | 7    | `randomColor`    | `"#7fffff"`                |
// | 8    | Body background  | `#7fffff`                    |
// | 9    | Console output   | `New Color Code = #7fffff` |


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


