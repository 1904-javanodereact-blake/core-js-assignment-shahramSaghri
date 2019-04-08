/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

//Function Difinition
function substring(someStr, startIndex, endIndex) {
    
    try
    {
        if( typeof(someStr) === 'string')
        {
            let subStr = ''
        
            for(let i = startIndex; i < endIndex; i++)
            {
                subStr += someStr[i];
            }
            
        }
        else
        {
            throw 'Invalid value';
        }

        return subStr;
    }
    catch(err)
    {
        console.log(err);
        return false;
    }

    
}

//Main
//Declaration
let myStr = 3;
let firstIndex = 0;
let lastIndex = 3;

//Process
let mySubStr = substring(myStr, firstIndex, lastIndex);

//Output
if(mySubStr)
{
    console.log(`The Original string is: ${myStr}
    and the sub string between index ${firstIndex} and ${lastIndex} is ${mySubStr}`)
}
else
{
    console.log('Program Terminated')
}



