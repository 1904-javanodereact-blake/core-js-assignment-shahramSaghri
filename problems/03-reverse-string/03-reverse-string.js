/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

//Function Definition

//export const reverseStr = (someStr) => {
// I Tried to export the reverseStr function to palindrome exsercise but for
// some reason import and export won't work for me I get the folloging error
// I commented it. Would you please find my mistake Thank you!
/**
 export const reverseStr = (someStr) => {
^^^^^^
SyntaxError: Unexpected token expor
t
    at new Script (vm.js:8
0:7)
 */
reverseStr = (someStr) => {

    let reversStrArray = '';

    for (let i = someStr.length - 1; i >= 0; i--)
    {
        reversStrArray += someStr[i]; 
    }
    return reversStrArray;
}

//Main Programe
//Input
let myStr = `Shahram`;

//Process
let myRevArr = reverseStr(myStr);

//Output
console.log(`The original string is: ${myStr}`)
console.log(`The reverse of above string is: ${myRevArr}`)

//export { reverseStr };