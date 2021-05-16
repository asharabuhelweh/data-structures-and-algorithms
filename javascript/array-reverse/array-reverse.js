'use strict';

const reverseArray = (arr) => {
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
      newArray[i] = arr[arr.length - (i+1)];
    }
    return newArray;
  
   }

   module.exports = reverseArray;
