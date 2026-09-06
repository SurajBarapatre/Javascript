// wap to find sum of 1 to n using do-while loop.

let n = 15;
let sum = 0;
let i = 1;

do {
    sum += i;
    i++;
}
while (i <= n);

console.log("Sum of 1 to " + n + " is: " + sum);
