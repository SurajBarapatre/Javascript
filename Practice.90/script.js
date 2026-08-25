// wap to find minimum value from the array with function.

function FindMini() 
{
const num = [10, 25, 15, 5, 30];

let minimum = num[0];

for (let i = 1; i < num.length; i++)
{
    if (num[i] < minimum)
    {
        minimum = num[i];
    }
}

console.log("Minimum Value of Array is : " + minimum);
}

// function call
FindMini();

// dry run -

// step 1: function FindMini() is created

// step 2: FindMini() function is called

// step 3: num = [10, 25, 15, 5, 30]

// step 4: minimum = num[0]
//         minimum = 10

// step 5: num.length = 5

// step 6: i = 1

// step 7: i < num.length
//         1 < 5 => true

// step 8: num[1] = 25

// step 9: num[1] < minimum
//         25 < 10 => false

// step 10: minimum remains 10

// step 11: i++ => i = 2

// step 12: i < num.length
//          2 < 5 => true

// step 13: num[2] = 15

// step 14: num[2] < minimum
//          15 < 10 => false

// step 15: minimum remains 10

// step 16: i++ => i = 3

// step 17: i < num.length
//          3 < 5 => true

// step 18: num[3] = 5

// step 19: num[3] < minimum
//          5 < 10 => true

// step 20: minimum = 5

// step 21: i++ => i = 4

// step 22: i < num.length
//          4 < 5 => true

// step 23: num[4] = 30

// step 24: num[4] < minimum
//          30 < 5 => false

// step 25: minimum remains 5

// step 26: i++ => i = 5

// step 27: i < num.length
//          5 < 5 => false

// step 28: for loop stops

// step 29: console.log("Minimum Value of Array is : " + minimum)

// final output: Minimum Value of Array is : 5