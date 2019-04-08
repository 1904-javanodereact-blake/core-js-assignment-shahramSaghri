/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

//Function Definition
function factorial(sumNum) {
  if(sumNum === 0){
      return 1; //Base Case
  } else {
      return sumNum * factorial(sumNum - 1); 
  }
}

//Main
//Declerations
let myNum = 3;
let myFactor = factorial(myNum);

//Process and output
console.log(`the result of ${myNum}! = ${myFactor} `);