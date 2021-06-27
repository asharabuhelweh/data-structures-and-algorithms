'use strict';

let {HashTable} = require('../hashtable/hashtable.js');

function repeatedWord(string) {
  if (!string) {
    return ('please pass a parameter');
  }
  if (typeof (string) !== 'string') {
    return 'strings value are just allowed!';
  }
  else {
    const wordStrings = string.match(/\w+/g);
    let hashTable = new HashTable(500);
    for (let i = 0; i < wordStrings.length; i++) {
      let str = wordStrings[i].toLowerCase();
      if (hashTable.contains(str)) {
        if (hashTable.get(str) == str) {
          return hashTable.get(str);
        }
      }
      else {
        hashTable.add(str, str);
      }
    }
    return 'no repeated words!';
  }
}

module.exports=repeatedWord;
