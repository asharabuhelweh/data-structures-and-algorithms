'use strict';
function Mergesort(arr) {
  if (!arr) {
    return ('please pass the array!');
  }
  if (arr.length === 0) {
    return ('the array is empty!');
  }
  let n = arr.length;   
  if (n > 1) {
    let mid = n / 2;  //declare a variable to specify the middle index of the array  
    let left = arr.slice(0, mid);  //Create copies of the subarrays (left from index 0 to the mid, the right subarray from the mid to the end)
    let right = arr.slice(mid, n);
    Mergesort(left);  //traverse into left subarray until become single number 
    Mergesort(right); //traverse into right subarray until become single number
    Merge(left, right, arr); //sort and merge left and right side by calling the Merge function
  }
  return arr;
}


function Merge(left, right, arr) {  //declare three pointers to i,j,k
  let i = 0;                     // i maintains current index of left subarray
  let j = 0;                      //j maintains current index of  right subarray
  let k = 0;                       //k  maintains current index of sorted array
  while (i < left.length && j < right.length) {  //loop throw array numbers 
    if (left[i] <= right[j]) {                     //check if the left number smaller than right number
      arr[k] = left[i];                            //save it in the sorted array
      i++;                                         //increase the i
    }
    else {
      arr[k] = right[j];                            //else save the right number in the sorted array 
      j++;                                           //increase the j 
    }
    k++;
  }
  while (left.length > i) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (right.length > j) {
    arr[k] = right[j];
    j++;
    k++;
  }
}
module.exports=Mergesort;
