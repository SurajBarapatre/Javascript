// wap to find max numbers from three numbers using nested if else. 

let A = 30;
let B = 35;
let C = 40;

if (A > B) {
    if (A > C) {
        console.log("A is the maximum number");
    } else {
        console.log("C is the maximum number");
    }
} else {
    if (B > C) {
        console.log("B is the maximum number");
    } else {
        console.log("C is the maximum number");
    }
}