// wap to print leap years from 2000 to 3000 using do-while loop.

let year = 2000;

do {
    if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) 
    {
        console.log(year);
    }
    year++;
} 
while (year <= 3000);