'use strict';
let Node = require('./node.js');
let { Queue } = require('../stacksAndQueues/stacks-and-queues.js');
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let result = [];
    let traverse = (node) => {
      if (!node || node.value === undefined) {
        throw new Error('please insert valid value!');
      }

      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  inOrder() {

    let result = [];

    let traverse = (node) => {
      if (!node || node.value === undefined) {
        throw new Error('please insert valid value!');
      }

      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    let result = [];

    let traverse = (node) => {
      if (!node || node.value === undefined) {
        throw new Error('please insert valid value!');
      }

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
  findMaximumValue() {
    if (!this.root) {
      return 'the Binary Tree is empty!';

    }
    else {
      let max = this.root;
      let traverse = (node) => {

        if (node.left) traverse(node.left);

        if (node.value > max.value) {
          max = node;
        }
        if (node.right) traverse(node.right);

        if (node.value > max.value) {
          max = node;
        }


      };
      traverse(this.root);
      return max.value;
    }
  }
  breadthFirst() {
    let result = [];
    if (!this.root) {
      return 'the Binary Tree is empty!';

    }
    //create new Queue
    let breadthQueue = new Queue;
    //add (Enqueue) the root node of the binary tree to the breadthQueue
    breadthQueue.Enqueue(this.root);
    //loop through the breadthQueue until the front ==null
    while (breadthQueue.front) {
      //save the fistNode in the queue in a variable by using dequeue method
      let firstNode = breadthQueue.dequeue();
      //push the value of the firstNode in the queue to the array
      result.push(firstNode.value);
      //check if fistNode has a left node
      if (firstNode.left) {
        //add (Enqueue) the left node of the fist node to the breadthQueue
        breadthQueue.Enqueue(firstNode.left);

      }
      //check if fistNode has a right node

      if (firstNode.right) {
        //add (Enqueue) the right node of the fist node to the breadthQueue

        breadthQueue.Enqueue(firstNode.right);

      }
    }
    return result;

  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;

  }
  add(value) {
    if (!value) {
      return 'please insert valid value!';
    }
    else {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      let current = this.root;
      let addNode = () => {

        if (value === current.value) {

          return 'duplicated values are not allowed!';
        }
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
          addNode();
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
          addNode();
        }
      };

      addNode();
    }
  }

  contains(value) {
    if (!this.root) {
      return 'the Binary Search Tree is empty!';
    }

    let current = this.root;
    let find = () => {

      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        if (!current.left) {
          return false;
        }
        current = current.left;
        find();
      } else if (value > current.value) {
        if (!current.right) {
          return false;
        }
        current = current.right;
        find();
      }
    };

    find();
  }
}

module.exports = {
  BinaryTree,
  BinarySearchTree
};
