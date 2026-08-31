// every click on button change new color by colors array.

let colors = ["red", "blue", "green", "yellow", "orange", "purple", "indigo"];

let i = 0;

document.getElementById("btn").addEventListener("click", function()
{
    document.body.style.backgroundColor = colors[i];

    i = i + 1;                                       // Har click ke baad i 1 se increase hota hai

    if (i == colors.length)                         // Jab i = 7 ho jata hai, aur colors.length = 7 hai, condition true hoti hai. Phir i = 0 ho jata hai
    {
        i = 0;
    }
});



// dry run -

// step 1: colors = ["red", "blue", "green", "yellow", "orange", "purple", "indigo"]

// step 2: i = 0

// step 3: colors.length = 7

// step 4: Button with id "btn" is selected.

// step 5: click event is added to the button.



//  Click 1
// step 6: Button is clicked.

// step 7: i = 0

// step 8: colors[i] = colors[0] = "red"

// step 9: document.body.style.backgroundColor = "red"

// step 10: i = i + 1
//          i = 0 + 1
//          i = 1

// step 11: i == colors.length
//          1 == 7 => false

// output: Background Color = red



//  Click 2
// step 12: Button is clicked.

// step 13: i = 1

// step 14: colors[i] = colors[1] = "blue"

// step 15: document.body.style.backgroundColor = "blue"

// step 16: i = i + 1
//          i = 1 + 1
//          i = 2

// step 17: i == colors.length
//          2 == 7 => false

// output: Background Color = blue



//  Click 3
// step 18: Button is clicked.

// step 19: i = 2

// step 20: colors[i] = colors[2] = "green"

// step 21: document.body.style.backgroundColor = "green"

// step 22: i = i + 1
//          i = 2 + 1
//          i = 3

// step 23: i == colors.length
//          3 == 7 => false

// output: Background Color = green



//  Click 4
// step 24: Button is clicked.

// step 25: i = 3

// step 26: colors[i] = colors[3] = "yellow"

// step 27: document.body.style.backgroundColor = "yellow"

// step 28: i = i + 1
//          i = 3 + 1
//          i = 4

// step 29: i == colors.length
//          4 == 7 => false

// output: Background Color = yellow



// Click 5
// step 30: Button is clicked.

// step 31: i = 4

// step 32: colors[i] = colors[4] = "orange"

// step 33: document.body.style.backgroundColor = "orange"

// step 34: i = i + 1
//          i = 4 + 1
//          i = 5

// step 35: i == colors.length
//          5 == 7 => false

// output: Background Color = orange



// Click 6
// step 36: Button is clicked.

// step 37: i = 5

// step 38: colors[i] = colors[5] = "purple"

// step 39: document.body.style.backgroundColor = "purple"

// step 40: i = i + 1
//          i = 5 + 1
//          i = 6

// step 41: i == colors.length
//          6 == 7 => false

// output: Background Color = purple



// Click 7
// step 42: Button is clicked.

// step 43: i = 6

// step 44: colors[i] = colors[6] = "indigo"

// step 45: document.body.style.backgroundColor = "indigo"

// step 46: i = i + 1
//          i = 6 + 1
//          i = 7

// step 47: i == colors.length
//          7 == 7 => true

// step 48: i = 0

// output: Background Color = indigo

// Click 8
// Now i has become 0, so the array starts again.

//-------------------------------------------------------------------------------------------------------------------------------------------------------//