// wap to check user eligible for vote or not using nested if else using function.

function VotingEligibility(age) 
{
  if (age < 0) {
    console.log("Invalid Age: Age cannot be negative.");
} else 

{
    if (age > 100) 
    {
        console.log("Invalid Age: Age cannot be more than 100.");
    } 
    else
    {
        if (age >= 18) 
        {
            console.log("User is Eligible for Voting.");
        } else {
            console.log("User is Not Eligible for Voting.");
        }
    }
}  
}

// function call
VotingEligibility(18);