'use strict';

const LinkedList = require('./linked-list.js');
const Node = require('./node.js');

// function zipLL(firstList, secondList) {

//   let zipLL = new LinkedList;

//   let firstValue = firstList.head; //first value in the first LL and it will be the first in zipLL
//   let secondValue = secondList.head; // first value in the second LL and it will be the second zipLL

//   while (firstValue || secondValue) {
//     if (firstValue) {
//       zipLL.append(firstValue.value);
//       firstValue = firstValue.next;
//     }
//     if (secondValue) {
//       zipLL.append(secondValue.value);
//       secondValue = secondValue.next;
//     }

//   }

//   return zipLL;
// }
function zipLL(firstList, secondList) {

  if (!firstList && !secondList && firstList === undefined && secondList === undefined) {
    return ('please insert valid values!');
  }

  if (firstList.head === null && !secondList.head === null) {
    return secondList.head;
  }

  if (secondList.head === null && !firstList.head === null) {
    return firstList.head;
  }

  let firstValue = firstList.head;
  let secondValue = secondList.head;
  while (firstValue.next && secondValue.next) {
    firstList.insertAfter(firstValue.value, secondValue.value);
    secondValue = secondValue.next;
    firstValue = firstValue.next.next;
  }

  while (secondValue.next) {
    firstList.append(secondValue.value);
    secondValue = secondValue.next;
    firstValue = firstValue.next;
  }

  if (!secondValue.next && !firstValue.next) {
    firstList.append(secondValue.value);
  } else {
    firstList.insertAfter(firstValue.value, secondValue.value);
  }
  return firstList;


}

module.exports = zipLL;
