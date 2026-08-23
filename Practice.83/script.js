// wap to wap to print array using loop and function

function printArray()
{
    const arr = [7, 8, 9, 10];

    for (let i = 0; i <= 3; i++)
    {
        console.log(arr[i]);
    }
}

// Function Call
printArray();

// dry run :-

// step 1: arr = [7, 8, 9, 10]

// step 2: i = 0
// step 3: i <= 3 => 0 <= 3 => true
// step 4: arr[0] = 7
// step 5: console.log(7)

// step 6: i++ => i = 1
// step 7: i <= 3 => 1 <= 3 => true
// step 8: arr[1] = 8
// step 9: console.log(8)

// step 10: i++ => i = 2
// step 11: i <= 3 => 2 <= 3 => true
// step 12: arr[2] = 9
// step 13: console.log(9)

// step 14: i++ => i = 3
// step 15: i <= 3 => 3 <= 3 => true
// step 16: arr[3] = 10
// step 17: console.log(10)

// step 18: i++ => i = 4
// step 19: i <= 3 => 4 <= 3 => false
// step 20: loop stops

// Final output:
// 7
// 8
// 9
// 10