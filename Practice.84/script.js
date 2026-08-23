// wap to print array in reverse order using loop and function

function ReverseOrder() 
{
    let arr = [50,40,30,20,10];

console.log("Array in Reverse Order :");

for (let i = arr.length - 1; i >= 0; i--)
{
    console.log(arr[i]);
}
}

//function call
ReverseOrder();

// dry run :-

// step 1: function ReverseOrder() is created

// step 2: ReverseOrder() function is called

// step 3: arr = [50, 40, 30, 20, 10]

// step 4: console.log("Array in Reverse Order :")

// step 5: arr.length = 5

// step 6: i = arr.length - 1
//         i = 5 - 1
//         i = 4

// step 7: i >= 0 => 4 >= 0 => true
// step 8: arr[4] = 10
// step 9: console.log(arr[4])
//         Output: 10

// step 10: i-- => i = 3

// step 11: i >= 0 => 3 >= 0 => true
// step 12: arr[3] = 20
// step 13: console.log(arr[3])
//         Output: 20

// step 14: i-- => i = 2

// step 15: i >= 0 => 2 >= 0 => true
// step 16: arr[2] = 30
// step 17: console.log(arr[2])
//         Output: 30

// step 18: i-- => i = 1

// step 19: i >= 0 => 1 >= 0 => true
// step 20: arr[1] = 40
// step 21: console.log(arr[1])
//         Output: 40

// step 22: i-- => i = 0

// step 23: i >= 0 => 0 >= 0 => true
// step 24: arr[0] = 50
// step 25: console.log(arr[0])
//         Output: 50

// step 26: i-- => i = -1

// step 27: i >= 0 => -1 >= 0 => false

// step 28: for loop stops

// Final output:
// Array in Reverse Order:
// 10
// 20
// 30
// 40
// 50





