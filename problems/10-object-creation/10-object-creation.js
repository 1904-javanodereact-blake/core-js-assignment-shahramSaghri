/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//Objects
//Object literal
myFirstObj = {
    name: 'shahram saghri',
    age: 25, //and some month
}

//Constructor Function
function mySecObj( name, age )
{
    this.objName = name;
    this.objAge = age;
}

//Class
class myThirdObj 
{
    constructor ( name, age )
    {
        this.name = name;
        this.age = age;
    }
}

