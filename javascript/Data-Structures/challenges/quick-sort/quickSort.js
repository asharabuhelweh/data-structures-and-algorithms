'use strict';
function QuickSort(arr, left, right) {
  if (!arr && !left && !right) {
    return ('please pass the array and left and right!');
  }
  if (arr.length === 0) {
    return ('the array is empty!');
  }
  if (right !== arr.length - 1 && left !== 0) {
    return ('the left should be 0 and right should be array of length-1,please insert them correctly');
  }
  if (left < right) {                              //check if left less than right
    let position = Partition(arr, left, right);    //assign position the return value from Partition function
    QuickSort(arr, left, position - 1);            //sort left part of the array   
    QuickSort(arr, position + 1, right);           //sort right part of the array 


    return arr;
  }
}
function Partition(arr, left, right) {
  let pivot = arr[right]; //assign the pivot to the last number of the array
  let low = left - 1;     //assign low to the left-1
  for (let i = left; i < right; i++) { // loop throw the array from left to right 
    if (arr[i] <= pivot) {            //check if the number less than pivot, increase the low by one and call the Swap function 
      low++;
      Swap(arr, i, low);
    }
  }
  Swap(arr, right, low + 1);
  return low + 1; //return low+1;

}

function Swap(arr, i, low) {
  let temp = arr[i];  
  arr[i] = arr[low];
  arr[low] = temp;
}

module.exports=QuickSort;
