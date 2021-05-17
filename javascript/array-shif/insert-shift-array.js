'use strict';

function insertShiftArray (arr , value){
  

  let newArr = [];
  
  let index=Math.ceil(arr.length/2);
  // console.log(index);
  if (index %2 === 0){
    let position = index;
    console.log(position);
    for (let i = 0;i< arr.length;i++){
      if ( i === position){
        newArr.push (value);
        newArr.push (arr[i])
      }else {
        newArr.push(arr[i]);
      }
    }
  }
   else {
    let position = index-1;
    for (let i=0 ; i< arr.length ; i++){
      if ( i === position){
        newArr.push (value);
        newArr.push (arr[i]);

      }else {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}

// insertShiftArray(arr,10);


   module.exports = insertShiftArray;
