/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

//Function Definition
function isEven(someNum) {
    
    let temp = someNum / 2;
    
    if (temp - Math.floor(temp) === 0)
    {
        return true;
    }
    else
    {
        return false;
    } 
}

//Main
//Declaration
let myNum = 11;

//Process
if (isEven(myNum) === true)
{
    console.log(`The Number ${myNum} is Even`)
}
else
{
    console.log(`The Number ${myNum} is odd`)
}