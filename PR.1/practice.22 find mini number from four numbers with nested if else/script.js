// wap to find min number from four numbers using nested if else.
let A = 10;
let B = 20;
let C = 15;
let D = 25;

if(A < B){
    if(A < C){
        if(A < D){
            console.log("A is minimum");
        }
        else{
            console.log("D is minimum");
        }
    }
    else{
        if(C < D){
            console.log("C is minimum");
        }
        else{
            console.log("D is minimum");
        }
    }
}
else{
    if(B < C){
        if(B < D){
            console.log("B is minimum");
        }
        else{
            console.log("D is minimum");
        }
    }
    else{
        if(C < D){
            console.log("C is minimum");
        }
        else{
            console.log("D is minimum");
        }
    }
}