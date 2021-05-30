'use strict';

const LinkedList = require('./linked-list.js');
const Node = require('./node.js');

function zipLL(firstList, secondList) {

    let zipLL = new LinkedList;

    let firstValue = firstList.head; //first value in the first LL and it will be the first in zipLL
    let secondValue = secondList.head; // first value in the second LL and it will be the second zipLL

    while (firstValue || secondValue) {  
        if (firstValue) {
            zipLL.append(firstValue.value); 
            firstValue = firstValue.next;
        }
        if (secondValue) {
            zipLL.append(secondValue.value);
            secondValue = secondValue.next;
        }

    }

    return zipLL
}

module.exports = zipLL;