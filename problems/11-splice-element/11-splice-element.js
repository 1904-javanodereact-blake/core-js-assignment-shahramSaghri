/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

//Function Definition
function spliceElement(someArr, index) 
{
    let firstSlice = [];
    let secontSlice = []; 
    for (let i = 0; i < index; i++)
    {
        firstSlice.push(someArr[i]);
    }

    for (let i = index; i <= someArr.length - 1; i++)
    {
        secontSlice.push(someArr[i]);
    }
    return [firstSlice, secontSlice];
}

//Main
//Declarations
index = 3;
someArr = [1, 2, 3, 4, 5];

//Process
resultArr = spliceElement(someArr, index);

//Ouoputs
console.log(`Frist Slice of the array [${someArr}] splited from,
index ${index} is [${resultArr[0]}] and the second slice is [${resultArr[1]}]`
)
