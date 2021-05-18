'use strict';

/**
 * Take an sortedArray and key
 *   return the index of the passed key if it exists in the passed array 
 * and return -1 if not exist
 * @param {array} sortedArray  array of numbers
 * @param {number} key the key search number we want to find it in the array 
 * @returns {number}
 */

const binarySearch = (sortedArray, key) => {
  let lowIndex = 0
  let highIndex = sortedArray.length - 1

  while (lowIndex <= highIndex) {
    const middle = Math.floor((lowIndex + highIndex) / 2)
    const random = sortedArray[middle]

    if (random === key) {

      return middle
          //find the key search number 

    }

    if (random > key) {
      highIndex = middle - 1
    } else {
      lowIndex = middle + 1
    }
  }

  return -1 //if not found
}

   module.exports = binarySearch;
