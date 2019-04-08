/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

//Function Definition
function fib(n) {
    if (n === 0)
    {
        return 0;
    }
    else if (n === 1)
    {
        return 1;
    }
    else 
    {
        return fib(n - 1) + fib(n - 2);
    }
}

//Main program
//Decleration
let myNum = 20;

//Process and output
let nthFib = fib(myNum)
console.log(`The ${myNum}th fibonachi number is ${nthFib}`);


