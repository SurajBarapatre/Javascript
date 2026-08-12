// wap to print leap years from 2000 to 3000 using while loop.

let year = 2000;

while (year <= 3000) 
    {
    if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) 
    {
        console.log(year);
    }
    year++;
}