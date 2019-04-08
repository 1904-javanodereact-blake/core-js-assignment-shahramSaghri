/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */


//Function Definition
function bubbleSort(numArray) {
  //let small = numArray[0];
  for(let j = 0; j < (numArray.length) - 1; j++)
  {
    for (let i = 0; i < (numArray.length) - 1; i++)
    {
      if (numArray[i] > numArray[i + 1])
      {
          let temp = numArray[i];
          numArray[i] = numArray[i + 1];
          numArray[i + 1] = temp;
      }
    }
  }
}

//Main
//Decrelations
let firstArray = [3, 2, 1, 4, 7, 4, 12, 5768, 76, 2];

//Process and output
console.log(firstArray);
bubbleSort(firstArray);
console.log(firstArray);


