'use strict';
const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;

  }



  insert(value) {
    try {
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
      }
      else {
        node.next = this.head;
        this.head = node;
      }
    }

    catch (error) {
      console.log(`error in insert method `, error);
    }
  }

  includes(value) {
    try {
      if (!this.head) {
        return false;
      }
      else {
        let temp = this.head;
        while (temp) {
          if (temp.value === value) {
            return true;
          }
          else {
            temp = temp.next;
          }
        }
        return false;

      }
    } catch (error) {
      console.log(`error in includes method`, error);

    }
  }




  toString() {
    try {
      let linkedList = "";
      let temp = this.head;

      while (temp) {
        linkedList += `{${temp.value}} -> `;
        temp = temp.next;
      }
      linkedList += "NULL";
      return linkedList;
    } catch (error) {
      console.log(`Error in toString method`, error);
    }
  }


}




module.exports = LinkedList;



