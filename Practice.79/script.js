// wap to find sum of all elements of array using loop.

const num = [5,6,7,8,9,10];

let sum = 0;

for(let i = 0; i < num.length; i++)
{
    sum = sum + num[i];
}

console.log("Sum Of All Elements of Array is : " + sum);

// dry run -

// step 1: num = [5, 6, 7, 8, 9, 10]
// step 2: sum = 0
// step 3: num.length = 6

// step 4: i = 0
// step 5: i < num.length => 0 < 6 => true
// step 6: sum = sum + num[i]
//         sum = 0 + num[0]
//         sum = 0 + 5
//         sum = 5
// step 7: i++ => i = 1

// step 8: i < num.length => 1 < 6 => true
// step 9: sum = sum + num[i]
//         sum = 5 + num[1]
//         sum = 5 + 6
//         sum = 11
// step 10: i++ => i = 2

// step 11: i < num.length => 2 < 6 => true
// step 12: sum = sum + num[i]
//          sum = 11 + num[2]
//          sum = 11 + 7
//          sum = 18
// step 13: i++ => i = 3

// step 14: i < num.length => 3 < 6 => true
// step 15: sum = sum + num[i]
//          sum = 18 + num[3]
//          sum = 18 + 8
//          sum = 26
// step 16: i++ => i = 4

// step 17: i < num.length => 4 < 6 => true
// step 18: sum = sum + num[i]
//          sum = 26 + num[4]
//          sum = 26 + 9
//          sum = 35
// step 19: i++ => i = 5

// step 20: i < num.length => 5 < 6 => true
// step 21: sum = sum + num[i]
//          sum = 35 + num[5]
//          sum = 35 + 10
//          sum = 45
// step 22: i++ => i = 6

// step 23: i < num.length => 6 < 6 => false

// step 24: loop stops

// Final output: Sum Of All Elements of Array is : 45
