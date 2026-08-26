// wap to print only even numbers of array.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Even Numbers Of Array is :");

for (let i = 0; i < num.length; i++)
{
    if (num[i] % 2 == 0)
    {
        console.log(num[i]);
    }
}

// dry run -

// step 1: num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// step 2: console.log("Even Numbers Of Array is :")

// step 3: i = 0
// step 4: i < num.length => 0 < 10 => true
// step 5: num[i] = num[0] = 1
// step 6: num[i] % 2 == 0
//         1 % 2 = 1
//         1 == 0 => false
//         1 is odd, so it is not printed

// step 7: i++ => i = 1
// step 8: i < num.length => 1 < 10 => true
// step 9: num[i] = num[1] = 2
// step 10: 2 % 2 = 0
//          0 == 0 => true
//          console.log(2)

// step 11: i++ => i = 2
// step 12: i < num.length => 2 < 10 => true
// step 13: num[i] = num[2] = 3
// step 14: 3 % 2 = 1
//          1 == 0 => false
//          3 is odd, so it is not printed

// step 15: i++ => i = 3
// step 16: i < num.length => 3 < 10 => true
// step 17: num[i] = num[3] = 4
// step 18: 4 % 2 = 0
//          0 == 0 => true
//          console.log(4)

// step 19: i++ => i = 4
// step 20: i < num.length => 4 < 10 => true
// step 21: num[i] = num[4] = 5
// step 22: 5 % 2 = 1
//          1 == 0 => false
//          5 is odd, so it is not printed

// step 23: i++ => i = 5
// step 24: i < num.length => 5 < 10 => true
// step 25: num[i] = num[5] = 6
// step 26: 6 % 2 = 0
//          0 == 0 => true
//          console.log(6)

// step 27: i++ => i = 6
// step 28: i < num.length => 6 < 10 => true
// step 29: num[i] = num[6] = 7
// step 30: 7 % 2 = 1
//          1 == 0 => false
//          7 is odd, so it is not printed

// step 31: i++ => i = 7
// step 32: i < num.length => 7 < 10 => true
// step 33: num[i] = num[7] = 8
// step 34: 8 % 2 = 0
//          0 == 0 => true
//          console.log(8)

// step 35: i++ => i = 8
// step 36: i < num.length => 8 < 10 => true
// step 37: num[i] = num[8] = 9
// step 38: 9 % 2 = 1
//          1 == 0 => false
//          9 is odd, so it is not printed

// step 39: i++ => i = 9
// step 40: i < num.length => 9 < 10 => true
// step 41: num[i] = num[9] = 10
// step 42: 10 % 2 = 0
//          0 == 0 => true
//          console.log(10)

// step 43: i++ => i = 10
// step 44: i < num.length => 10 < 10 => false
// step 45: loop stops

// Final output:
// Even Numbers Of Array is :
// 2
// 4
// 6
// 8
// 10