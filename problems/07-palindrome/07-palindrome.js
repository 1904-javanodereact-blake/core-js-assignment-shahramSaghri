/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */



//import {reverseStr} from '../problems/03-reverse-string';
//Error I get for importing reverseStr:
/*
import {reverseStr} from '../problems/03-reverse-string';
       ^

SyntaxError
: Unexpected token {
  at new Script (vm.js:80:7
)
*/

reverseStr = (someStr) => {

    let reversStrArray = '';

    for (let i = someStr.length - 1; i >= 0; i--)
    {
        reversStrArray += someStr[i]; 
    }
    return reversStrArray;
}

function isPalindrome(someStr) {
    
    let tempStr = reverseStr(someStr);
    if ( tempStr === someStr)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

let myString = 'radar';
console.log(`${reverseStr(myString)}`);

if( isPalindrome(myString))
{
    console.log(`the word ${myString} is a palindrome word, and its reverse is ${reverseStr(myString)}`)
}
else
{
    console.log(`the word ${myString} is not a palindrome word, and its reverse is ${reverseStr(myString)}`)
}

