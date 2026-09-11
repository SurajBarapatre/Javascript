// wap to print only odd numbers from 1 to n using do-while loop.

let n = 10;
let i = 1;

do {
    if (i % 2 !== 0) 
    {
        console.log(i);
    }
    i++;
} 
while (i <= n);
