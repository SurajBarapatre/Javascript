// wap to find sum of first and last digits of a number exa. n = 456, ans = 4 + 6 = 10 using while loop.

let num = 456;

// find last digit
let lastDigit = num % 10;

// find first digit
let firstDigit = num;

while (firstDigit >= 10) 
{
    firstDigit = Math.floor(firstDigit / 10);
}

// find sum of first and last digits
let sum = firstDigit + lastDigit;

console.log("The sum of the first and last digits of " + num + " is: " + sum);

// dry run :-

// step 1: num = 456
// step 2: lastDigit = 456 % 10 = 6
// step 3: firstDigit = 456
// step 4: while (firstDigit >= 10) => true
// step 5: firstDigit = Math.floor(456 / 10) = 45
// step 6: while (firstDigit >= 10) => true
// step 7: firstDigit = Math.floor(45 / 10) = 4
// step 8: while (firstDigit >= 10) => false
// step 9: sum = firstDigit + lastDigit = 4 + 6 = 10

// final output: The sum of the first and last digits of 456 is: 10