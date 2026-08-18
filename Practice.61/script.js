//  wap to find minimum number from four numbers using nested if else using function.

function MinNumber(A,B,C,D) 
{
    if(A < B)
{
    if(A < C)
        
    {
        if(A < D)
            
        {
            console.log("A is minimum");
        }
        else
        {
            console.log("D is minimum");
        }
    }
    else{
        if(C < D)
        {
            console.log("C is minimum");
        }
        else
        {
            console.log("D is minimum");
        }
    }
}
else
{
    if(B < C){
        if(B < D)
        {
            console.log("B is minimum");
        }
        else
        {
            console.log("D is minimum");
        }
    }
    else{
        if(C < D)
        {
            console.log("C is minimum");
        }
        else
        {
            console.log("D is minimum");
        }
    }
}
}

// function call
MinNumber(10,45,23,12);