//wap to check number is palindrom or not exa. n = 121, ans = this number is palindrom number using while loop and function

function PalindromNumber() 
{
    let n = 121; 
    let original = n;
    let reverse = 0;

while (n > 0) 
{
    reverse = reverse * 10 + n % 10;
    n = Math.floor(n / 10);
}

if (original == reverse) 
{
    console.log("This number is a palindrom.");
} 
else 
{
    console.log("This number is not a palindrom.");
}
}

//function call
PalindromNumber();

// dry run :-

// step 1: n = 121
// step 2: original = n = 121
// step 3: reverse = 0

// step 4: while (n > 0) => 121 > 0 => true
// step 5: reverse = reverse * 10 + n % 10
//         reverse = 0 * 10 + 121 % 10
//         reverse = 0 + 1
//         reverse = 1

// step 6: n = Math.floor(121 / 10) = 12

// step 7: while (n > 0) => 12 > 0 => true
// step 8: reverse = reverse * 10 + n % 10
//         reverse = 1 * 10 + 12 % 10
//         reverse = 10 + 2
//         reverse = 12

// step 9: n = Math.floor(12 / 10) = 1

// step 10: while (n > 0) => 1 > 0 => true
// step 11: reverse = reverse * 10 + n % 10
//          reverse = 12 * 10 + 1 % 10
//          reverse = 120 + 1
//          reverse = 121

// step 12: n = Math.floor(1 / 10) = 0

// step 13: while (n > 0) => 0 > 0 => false

// step 14: original = 121
//          reverse = 121

// step 15: original == reverse
//          121 == 121 => true

// final output: This number is a palindrom.
