// wap to print grades of students based on their percentage.

let percentage = 98;

if (percentage >= 95) 
{
    console.log("Grade: A+");
}
else if (percentage >= 85) 
{
    console.log("Grade: A");
}
else if (percentage >= 80) 
{
    console.log("Grade: B+");
}
else if (percentage >= 75) 
{
    console.log("Grade: B");
}
else if (percentage >= 70)
{
    console.log("Grade: C+");
}

else if (percentage < 65)
{
    console.log("Grade: C");
}
else if (percentage < 60)
{
    console.log("Grade: D");
}
else if (percentage < 50)
{
    console.log("Grade: E");
}
else 
{
    console.log("Grade: F");
}