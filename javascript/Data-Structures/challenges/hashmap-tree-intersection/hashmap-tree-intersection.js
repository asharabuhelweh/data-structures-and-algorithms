'use strict';

const { HashTable } = require('../hashtable/hashtable.js');



function treeIntersection(bTree1, bTree2) {
  if (bTree1.root === null || bTree2.root === null) {
    return ('the tree is empty!');
  }
  let hashTable = new HashTable(3333);
  let outputArr = [];
  let array1 = bTree1.preOrder();
  let array2 = bTree2.preOrder();

  for (let i = 0; i < array1.length; i++) {
    let key = array1[i].toString();
    let value = array1[i];
    if (!hashTable.contains(key)) {
      hashTable.add(key, value);
    }
  }
  for (let i = 0; i < array2.length; i++) {
    let key = array2[i].toString();
    let value2 = array2[i];
    if (hashTable.contains(key)) {
      outputArr.push(value2);
    }
  }
  if (outputArr.length > 0) {
    return outputArr;
  } else {
    return ('sorry,but there is no matching values between the trees');
  }
}

module.exports = treeIntersection;
