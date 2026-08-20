// wap to print array in reverse order using loop

let arr = [50,40,30,20,10];

console.log("Array in Reverse Order :");

for (let i = arr.length - 1; i >= 0; i--)
{
    console.log(arr[i]);
}

// dry run -

// step 1: arr = [50, 40, 30, 20, 10]

// step 2: arr.length = 5

// step 3: i = arr.length - 1 = 5 - 1 = 4
// step 4: i >= 0 => 4 >= 0 => true
// step 5: console.log(arr[4]) => 50
// step 6: i-- => i = 3

// step 7: i >= 0 => 3 >= 0 => true
// step 8: console.log(arr[3]) => 40
// step 9: i-- => i = 2

// step 10: i >= 0 => 2 >= 0 => true
// step 11: console.log(arr[2]) => 30
// step 12: i-- => i = 1

// step 13: i >= 0 => 1 >= 0 => true
// step 14: console.log(arr[1]) => 20
// step 15: i-- => i = 0

// step 16: i >= 0 => 0 >= 0 => true
// step 17: console.log(arr[0]) => 10
// step 18: i-- => i = -1

// step 19: i >= 0 => -1 >= 0 => false

// final output:
// 50
// 40
// 30
// 20
// 10