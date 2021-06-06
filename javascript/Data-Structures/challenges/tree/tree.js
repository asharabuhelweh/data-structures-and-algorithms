'use strict';
let Node = require('./node.js');
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
      // throw new Error('empty binary tree!');
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
