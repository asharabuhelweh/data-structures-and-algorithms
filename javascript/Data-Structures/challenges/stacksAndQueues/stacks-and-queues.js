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


  isEmpty() {
    if (this.size === 0) {  //check the size 
                             //if it greater than 0 return false
      return true;           ////if it equals  0 return true
    }
    else {
      return false;
    }

  }

}


class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }



  Enqueue(value) {
    let node = new Node(value);   
    if (this.size === 0) {     //if the queue empty
      this.front = node;       //refer both of rear and front to the new node 
      this.rear = node;
    } else {
      this.rear.next = node;   //if it not empty the rear to the node 
      this.rear = node;
    }
    this.size = this.size + 1;  //increase the size by one 
  }

  dequeue() {
    if (this.front) {               
      this.size = this.size - 1;

      let temp = this.front;          //point the temp to the front 
      this.front = this.front.next;   //point the front to the next node
      temp.next = null;                //point the temp to null
      return temp.value;               //return the value of temp
    }
    if (this.size === 0) {
      throw new Error('the Queue is empty!');
    }
  }

  peek() {
    if (this.front) {
      return this.front.value;
    } else {
      throw new Error('This is an empty queue');
    }
  }


  isEmpty() {
    if (this.size === 0) {
      return true;
    }
    else {
      return false;
    }

  }

}

module.exports = {
  Node: Node,
  Stack: Stack,
  Queue: Queue
};
