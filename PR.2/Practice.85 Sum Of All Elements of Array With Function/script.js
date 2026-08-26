// wap to find sum of all elements of array using loop and function.

function Sum() 
{
const num = [5,6,7,8,9,10];

let sum = 0;

for(let i = 0; i < num.length; i++)
{
    sum = sum + num[i];
}

console.log("Sum Of All Elements of Array is : " + sum);
}

// function call
 Sum();

 // dry run :-

 // step 1: function Sum() is created

// step 2: Sum() function is called

// step 3: num = [5, 6, 7, 8, 9, 10]

// step 4: sum = 0

// step 5: num.length = 6

// step 6: i = 0
// step 7: i < num.length => 0 < 6 => true
// step 8: num[i] = num[0] = 5
// step 9: sum = sum + num[i]
//         sum = 0 + 5
//         sum = 5

// step 10: i++ => i = 1

// step 11: i < num.length => 1 < 6 => true
// step 12: num[i] = num[1] = 6
// step 13: sum = sum + num[i]
//          sum = 5 + 6
//          sum = 11

// step 14: i++ => i = 2

// step 15: i < num.length => 2 < 6 => true
// step 16: num[i] = num[2] = 7
// step 17: sum = sum + num[i]
//          sum = 11 + 7
//          sum = 18

// step 18: i++ => i = 3

// step 19: i < num.length => 3 < 6 => true
// step 20: num[i] = num[3] = 8
// step 21: sum = sum + num[i]
//          sum = 18 + 8
//          sum = 26

// step 22: i++ => i = 4

// step 23: i < num.length => 4 < 6 => true
// step 24: num[i] = num[4] = 9
// step 25: sum = sum + num[i]
//          sum = 26 + 9
//          sum = 35

// step 26: i++ => i = 5

// step 27: i < num.length => 5 < 6 => true
// step 28: num[i] = num[5] = 10
// step 29: sum = sum + num[i]
//          sum = 35 + 10
//          sum = 45

// step 30: i++ => i = 6

// step 31: i < num.length => 6 < 6 => false

// step 32: for loop stops

// step 33: console.log("Sum Of All Elements of Array is : " + sum)

// final output: Sum Of All Elements of Array is : 45