// wap to find max value from the array using function.

function MaxValue() 
{
const num = [10, 25, 15, 40, 30];

let max = num[0];

for (let i = 1; i < num.length; i++)
{
    if (num[i] > max)
    {
        max = num[i];
    }
}

console.log("Max Value of Array is : " + max);
}

// function call
MaxValue();

// dry run :-

// step 1: function MaxValue() is created

// step 2: MaxValue() function is called

// step 3: num = [10, 25, 15, 40, 30]

// step 4: max = num[0]
//         max = 10

// step 5: num.length = 5

// step 6: i = 1

// step 7: i < num.length => 1 < 5 => true
// step 8: num[i] = num[1] = 25
// step 9: num[i] > max
//         25 > 10 => true
// step 10: max = 25

// step 11: i++ => i = 2

// step 12: i < num.length => 2 < 5 => true
// step 13: num[i] = num[2] = 15
// step 14: num[i] > max
//          15 > 25 => false
// step 15: max remains 25

// step 16: i++ => i = 3

// step 17: i < num.length => 3 < 5 => true
// step 18: num[i] = num[3] = 40
// step 19: num[i] > max
//          40 > 25 => true
// step 20: max = 40

// step 21: i++ => i = 4

// step 22: i < num.length => 4 < 5 => true
// step 23: num[i] = num[4] = 30
// step 24: num[i] > max
//          30 > 40 => false
// step 25: max remains 40

// step 26: i++ => i = 5

// step 27: i < num.length => 5 < 5 => false

// step 28: for loop stops

// step 29: console.log("Max Value of Array is : " + max)

// final output: Max Value of Array is : 40