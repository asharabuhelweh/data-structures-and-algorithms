'use strict';
class Node {
  constructor(value) {


    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);   // create new node
    node.next = this.top;         //point for the next of the new node to the next of the top
    this.top = node;              //point the top to the new node 
    this.size = this.size + 1;    //increase the size of of the stack by one 
  }


  pop() {
    if (this.size === 0) {    //check the size of the stack and throw error if it empty
      throw new Error('the stack is empty!');
    }
    let temp = this.top;       //define a variable to point to the top
    this.top = temp.next;      //point the top to the next node
    temp.next = null;          //pont the next of the temp to the null
    this.size = this.size - 1;  //increment the size by one 
    return temp.value;         //return the popped value 

  }



  peek() {
    if (this.size === 0) {
      throw new Error('the stack is empty!');
    }
    return this.top.value;  //return the value if the top node 
  }


}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {

    this.stack1.push(value); //push the value into stack1

  }

  dequeue() {
    try {
      while (this.stack1.top) {                     //loop over the values in stack 1
        this.stack2.push(this.stack1.pop());      //pop the value and push it to the stack2
      }
      let poppedValue = this.stack2.pop();           //pop the value pushed in stack2 
      while (this.stack2.top) {                       //loop over stack2
        this.stack1.push(this.stack2.pop());        //pop the value and push it to the stack1
      }
      return poppedValue;                           //return the popped value in stack2

    } catch (error) {
      console.error('empty queue!', error)
    }

  }

}
module.exports = {
  Node,
  Stack,
  PseudoQueue
};
