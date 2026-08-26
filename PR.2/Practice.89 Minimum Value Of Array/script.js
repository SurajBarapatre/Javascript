// wap to find minimum value from the array.

const num = [5, 25, 15, 40, 30];

let minimum = num[0];

for (let i = 1; i < num.length; i++)
{
    if (num[i] < minimum)
    {
        minimum = num[i];
    }
}

console.log("Minimum Value of Array is : " + minimum);

// dry run -

// step 1: num = [5, 25, 15, 40, 30] 

// step 2: minimum = num[0] 
//         minimum = 5

// step 3: i = 1

// step 4: i < num.length
//         1 < 5 => true

// step 5: num[i] = num[1] = 25

// step 6: num[i] < minimum
//         25 < 5 => false

// step 7: minimum = 5

// step 8: i++ => i = 2

// step 9: i < num.length
//         2 < 5 => true

// step 10: num[i] = num[2] = 15

// step 11: num[i] < minimum
//          15 < 5 => false

// step 12: minimum = 5

// step 13: i++ => i = 3

// step 14: i < num.length
//          3 < 5 => true

// step 15: num[i] = num[3] = 40

// step 16: num[i] < minimum
//          40 < 5 => false

// step 17: minimum = 5

// step 18: i++ => i = 4

// step 19: i < num.length
//          4 < 5 => true

// step 20: num[i] = num[4] = 30

// step 21: num[i] < minimum
//          30 < 5 => false

// step 22: minimum = 5

// step 23: i++ => i = 5

// step 24: i < num.length
//          5 < 5 => false

// step 25: for loop stops

// final output: Minimum Value of Array is : 5