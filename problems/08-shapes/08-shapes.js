/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
//Function Definition
function printShape(shape, height, character) {

  switch( shape )
  {
    case 'Squer':
    for (let i = 0; i <= height; i++)
    {
      console.log(character.repeat(height));
    }
    break;

    case 'Triangle':
    let l = height
    for (let i = 0; i <= height; i++)
    {
      console.log(character.repeat(height - l));
      l--;
    }
    break;
    case 'Diamond':
    //To print first half of my Diamond
    
    let myArr = []
    let j = height;
    for(let i = 0; i <= height; i++)
    {
      rightSide = ' '.repeat(j)
      leftSide = character.repeat(1 + i * 2)
      console.log(rightSide + leftSide)
      j--;
    }
    //To print the second half of my diomond
    let k = 0;
    for(let i = height; i >=0; i--)
    {
      rightSide = ' '.repeat(k);
      leftSide = character.repeat(1 + i * 2);
      console.log(rightSide + leftSide);
      k++;
    }
    break;
  }
  
}

//Main
//Declarations
let myShape = 'Diamond';
let myHeight = 5;
let char = '#';

//Process
printShape(myShape, myHeight, char);