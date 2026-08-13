//  wap to find sum of all digits of a number exa. n = 456 , ans = 4+5+6 = 15 using while loop

let num = 456;
let sum = 0;

while (num > 0) 
{
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
}
console.log("Sum of All digits:", sum);

// Dry run :-

// step.1: num = 456, sum = 0
// step.2: digit = 456 % 10 = 6, sum = 0 + 6 = 6, num = Math.floor(456 / 10) = 45
// step.3: digit = 45 % 10 = 5, sum = 6 + 5 = 11, num = Math.floor(45 / 10) = 4
// step.4: digit = 4 % 10 = 4, sum = 11 + 4 = 15, num = Math.floor(4 / 10) = 0

// final output: Sum of All digits: 15
