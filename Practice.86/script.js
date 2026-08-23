 // wap to print only even numbers of array using function.

 function EvenNumber() 
 {
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Even Numbers Of Array is :");

for (let i = 0; i < num.length; i++)
{
    if (num[i] % 2 == 0)
    {
        console.log(num[i]);
    }
}
 }

 // function call
 EvenNumber();

 // dry run :-

 // step 1: function EvenNumber() is created

// step 2: EvenNumber() function is called

// step 3: num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// step 4: console.log("Even Numbers Of Array is :")

// step 5: num.length = 10

// step 6: i = 0
// step 7: i < num.length => 0 < 10 => true
// step 8: num[i] = num[0] = 1
// step 9: num[i] % 2 == 0
//         1 % 2 = 1
//         1 == 0 => false
//         1 is odd, so it is not printed

// step 10: i++ => i = 1

// step 11: i < num.length => 1 < 10 => true
// step 12: num[i] = num[1] = 2
// step 13: 2 % 2 = 0
//          0 == 0 => true
// step 14: console.log(2)
//          Output: 2

// step 15: i++ => i = 2

// step 16: i < num.length => 2 < 10 => true
// step 17: num[i] = num[2] = 3
// step 18: 3 % 2 = 1
//          1 == 0 => false
//          3 is odd, so it is not printed

// step 19: i++ => i = 3

// step 20: i < num.length => 3 < 10 => true
// step 21: num[i] = num[3] = 4
// step 22: 4 % 2 = 0
//          0 == 0 => true
// step 23: console.log(4)
//          Output: 4

// step 24: i++ => i = 4

// step 25: i < num.length => 4 < 10 => true
// step 26: num[i] = num[4] = 5
// step 27: 5 % 2 = 1
//          1 == 0 => false
//          5 is odd, so it is not printed

// step 28: i++ => i = 5

// step 29: i < num.length => 5 < 10 => true
// step 30: num[i] = num[5] = 6
// step 31: 6 % 2 = 0
//          0 == 0 => true
// step 32: console.log(6)
//          Output: 6

// step 33: i++ => i = 6

// step 34: i < num.length => 6 < 10 => true
// step 35: num[i] = num[6] = 7
// step 36: 7 % 2 = 1
//          1 == 0 => false
//          7 is odd, so it is not printed

// step 37: i++ => i = 7

// step 38: i < num.length => 7 < 10 => true
// step 39: num[i] = num[7] = 8
// step 40: 8 % 2 = 0
//          0 == 0 => true
// step 41: console.log(8)
//          Output: 8

// step 42: i++ => i = 8

// step 43: i < num.length => 8 < 10 => true
// step 44: num[i] = num[8] = 9
// step 45: 9 % 2 = 1
//          1 == 0 => false
//          9 is odd, so it is not printed

// step 46: i++ => i = 9

// step 47: i < num.length => 9 < 10 => true
// step 48: num[i] = num[9] = 10
// step 49: 10 % 2 = 0
//          0 == 0 => true
// step 50: console.log(10)
//          Output: 10

// step 51: i++ => i = 10

// step 52: i < num.length => 10 < 10 => false

// step 53: for loop stops

// Final output:
// Even Numbers Of Array is :
// 2
// 4
// 6
// 8
// 10