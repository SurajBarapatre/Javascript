// wap to find max value from the array.

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

// dry run -

// step 1: num = [10, 25, 15, 40, 30]

// step 2: max = num[0] = 10

// step 3: i = 1
// step 4: num[1] = 25
// step 5: 25 > 10 => true
// step 6: max = 25

// step 7: i = 2
// step 8: num[2] = 15
// step 9: 15 > 25 => false
// step 10: max = 25

// step 11: i = 3
// step 12: num[3] = 40
// step 13: 40 > 25 => true
// step 14: max = 40

// step 15: i = 4
// step 16: num[4] = 30
// step 17: 30 > 40 => false
// step 18: max = 40

// step 19: i = 5
// step 20: i < num.length => 5 < 5 => false
// step 21: loop stops

// Final output: Max Value of Array is : 40

