// wap to check number is magic number or not exa. n = 123, 1*2*3 == 1 + 2 + 3, 6==6 using function.

function MagicNumber() 
{
    let n = 123;
    let original = n;

    let sum = 0;
    let multi = 1;

while (n > 0)
{
    let digit = n % 10;

    sum = sum + digit;

    multi = multi * digit;

    n = Math.floor(n / 10);
}

console.log("Original Number =", original);
console.log("Sum of digits =", sum);
console.log("Multiplication of digits =", multi);

if (sum == multi)
{
    console.log(original + " is a magic number");
}
else
{
    console.log(original + " is not a magic number");
}

}

//function call
MagicNumber();

// Dry run :-

// step 1: n = 123
// step 2: original = n = 123
// step 3: sum = 0
// step 4: multi = 1

// step 5: while (n > 0) => 123 > 0 => true

// step 6: digit = n % 10
//         digit = 123 % 10 = 3

// step 7: sum = sum + digit
//         sum = 0 + 3 = 3

// step 8: multi = multi * digit
//         multi = 1 * 3 = 3

// step 9: n = Math.floor(n / 10)
//         n = Math.floor(123 / 10) = 12


// step 10: while (n > 0) => 12 > 0 => true

// step 11: digit = n % 10
//          digit = 12 % 10 = 2

// step 12: sum = sum + digit
//          sum = 3 + 2 = 5

// step 13: multi = multi * digit
//          multi = 3 * 2 = 6

// step 14: n = Math.floor(n / 10)
//          n = Math.floor(12 / 10) = 1


// step 15: while (n > 0) => 1 > 0 => true

// step 16: digit = n % 10
//          digit = 1 % 10 = 1

// step 17: sum = sum + digit
//          sum = 5 + 1 = 6

// step 18: multi = multi * digit
//          multi = 6 * 1 = 6

// step 19: n = Math.floor(n / 10)
//          n = Math.floor(1 / 10) = 0


// step 20: while (n > 0) => 0 > 0 => false

// step 21: sum = 6
// step 22: multi = 6

// step 23: if (sum == multi)
//          6 == 6 => true

// final output:
// Original Number = 123
// Sum of digits = 6
// Multiplication of digits = 6
// 123 is a magic number