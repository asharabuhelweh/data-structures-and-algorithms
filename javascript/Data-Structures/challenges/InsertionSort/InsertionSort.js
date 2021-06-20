'use strict';
function InsertionSort(arr) {
  if (!arr) {
    return ('please pass the array!');
  }
  if (arr.length === 0) {
    return ('the array is empty!');
  }

  for (let i = 1; i < arr.length; i++) { //loop throw the array 
    let j = i - 1;                        //declare variable and assign it to length of the array minus one  
    let temp = arr[i];
    while (j >= 0 && temp < arr[j]) {     //loop until Find the minimum element in the arr and place it in the beginning

      arr[j + 1] = arr[j];
      j = j - 1;

    }
    arr[j + 1] = temp;


  }
  return arr;
}

module.exports = InsertionSort;
