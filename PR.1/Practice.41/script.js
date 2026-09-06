// wap to swaping using third variable and function.

function swap(a, b)
{
    console.log("Before Swapping");
    console.log("a =", a);
    console.log("b =", b);

let c = a;
    a = b;
    b = c;

    console.log("After Swapping");
    console.log("a =", a);
    console.log("b =", b);
}

swap(23, 25);