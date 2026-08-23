// wap to find multiplication table of any number using function.

function MultiplicationNumber() 
{
    let num = 10;

for (let i = 1; i <= 10; i++)
{
    console.log(num + " x " + i + " = " + (num * i));
}
}

// function call
MultiplicationNumber();

// dry run :-

// step 1: function MultiplicationNumber() is created

// step 2: MultiplicationNumber() function is called

// step 3: num = 10

// step 4: i = 1

// step 5: i <= 10 => 1 <= 10 => true
// step 6: num + " x " + i + " = " + (num * i)
//         10 + " x " + 1 + " = " + (10 * 1)
//         10 x 1 = 10
// step 7: console.log("10 x 1 = 10")

// step 8: i++ => i = 2

// step 9: i <= 10 => 2 <= 10 => true
// step 10: 10 * 2 = 20
// step 11: console.log("10 x 2 = 20")

// step 12: i++ => i = 3

// step 13: i <= 10 => 3 <= 10 => true
// step 14: 10 * 3 = 30
// step 15: console.log("10 x 3 = 30")

// step 16: i++ => i = 4

// step 17: i <= 10 => 4 <= 10 => true
// step 18: 10 * 4 = 40
// step 19: console.log("10 x 4 = 40")

// step 20: i++ => i = 5

// step 21: i <= 10 => 5 <= 10 => true
// step 22: 10 * 5 = 50
// step 23: console.log("10 x 5 = 50")

// step 24: i++ => i = 6

// step 25: i <= 10 => 6 <= 10 => true
// step 26: 10 * 6 = 60
// step 27: console.log("10 x 6 = 60")

// step 28: i++ => i = 7

// step 29: i <= 10 => 7 <= 10 => true
// step 30: 10 * 7 = 70
// step 31: console.log("10 x 7 = 70")

// step 32: i++ => i = 8

// step 33: i <= 10 => 8 <= 10 => true
// step 34: 10 * 8 = 80
// step 35: console.log("10 x 8 = 80")

// step 36: i++ => i = 9

// step 37: i <= 10 => 9 <= 10 => true
// step 38: 10 * 9 = 90
// step 39: console.log("10 x 9 = 90")

// step 40: i++ => i = 10

// step 41: i <= 10 => 10 <= 10 => true
// step 42: 10 * 10 = 100
// step 43: console.log("10 x 10 = 100")

// step 44: i++ => i = 11

// step 45: i <= 10 => 11 <= 10 => false

// step 46: for loop stops

// final output:
// 10 x 1 = 10
// 10 x 2 = 20
// 10 x 3 = 30
// 10 x 4 = 40
// 10 x 5 = 50
// 10 x 6 = 60
// 10 x 7 = 70
// 10 x 8 = 80
// 10 x 9 = 90
// 10 x 10 = 100