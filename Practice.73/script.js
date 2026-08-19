// wap to find sum of all digits of a number exa. n = 456 , ans = 4+5+6 = 15 using while loop and function.
function SumOfDigits(num)
{
    let sum = 0;

    while (num > 0)
    {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }

    console.log("Sum of All digits:", sum);
}

// Function Call
SumOfDigits(456);

// dry run:-

// step 1: num = 456
// step 2: sum = 0

// step 3: num > 0 => 456 > 0 => true
// step 4: digit = 456 % 10 = 6
// step 5: sum = 0 + 6 = 6
// step 6: num = Math.floor(456 / 10) = 45

// step 7: num > 0 => 45 > 0 => true
// step 8: digit = 45 % 10 = 5
// step 9: sum = 6 + 5 = 11
// step 10: num = Math.floor(45 / 10) = 4

// step 11: num > 0 => 4 > 0 => true
// step 12: digit = 4 % 10 = 4
// step 13: sum = 11 + 4 = 15
// step 14: num = Math.floor(4 / 10) = 0

// step 15: num > 0 => 0 > 0 => false

// final output: Sum of All digits: 15