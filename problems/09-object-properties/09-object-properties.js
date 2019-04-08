/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

//Function Definition
function objectProperties(someObj) {
    for ( prop in someObj)
    {
        console.log(someObj[prop])
    }
}

//Declaration
let myObj = {
    fristName: 'shahram',
    lastName: 'saghri',
    email: 'shahram.saghri@gmail.com'
}

//Process
let propName
for ( ele in myObj )
{
    console.log(ele, myObj[ele])
}



