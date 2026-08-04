// Swap without Third Variable

let a = 10;
let b = 20;

console.log("Before Swapping");
console.log("a =", a);
console.log("b =", b);

// Swapping formula //
a = a + b;
b = a - b;
a = a - b;

console.log("After Swapping");
console.log("a =", a);
console.log("b =", b);