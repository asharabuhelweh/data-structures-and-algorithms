'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  getValues() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}


class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;

    hash = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 0) * 599 % this.size;


    return hash;
  }

  add(key, value) {
    let hash = this.hash(key);

    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    this.table[hash].add({ [key]: value });
  }

  contains(key) {
    let hashed = this.hash(key);
    if (this.table[hashed]) {
      return true;
    }
    else {
      return null;
    }
  }
  get(key) {
    let values = [];
    let arr = [];
    let hashed = this.hash(key);
    if (this.table[hashed]) {
      let temp = this.table[hashed].head;
      while (temp) {
        values.push(Object.values(temp.value));
        temp = temp.next;
      }
      values.map((element) => {
        arr.push(element[0]);

      });
      return arr;
    } else {
      return 'sorry the inserted key  is not in the bucket';
    }

  }


}


let hashtable = new HashTable(1021);
// let hashtable = new HashTable(1021);
// if (!hashtable.contains('John'))
hashtable.add('John', 'Boss');
hashtable.add('Cathy', 'The Real Boss');
hashtable.add('Zach', 'Kid 1');
hashtable.add('Allie', 'Kid 2');
hashtable.add('Rosie', 'Dog');
hashtable.add('Cat', 'TA');
hashtable.add('Justin', 'Student');
hashtable.add('Jason', 'Student');
hashtable.add('Ben', 'Student');
hashtable.add('Timea', 'Student');
hashtable.add('Jen', 'Student');
hashtable.add('Khalil', 'Student');
hashtable.add('Michael', 'Student');
hashtable.add('Ovi', 'Student');
hashtable.add('taC', 'lol');


console.log(hashtable.table);

hashtable.table.forEach((data, i) => {
  console.log(i, data && data.getValues());
});
hashtable.contains('kk');
hashtable.get('Cat');

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
