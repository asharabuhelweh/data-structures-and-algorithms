'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];

  }
}

class KArayTree {
  constructor(root = null) {
    this.root = root;
  }

}


function FizzBuzzTree(tree) {
  if (!tree.root) {
    return 'k-aray Tree Empty is empty!';
  }
  let kTree = tree;     //declare variable to save the parameter tree into
  let traversal = (node) => {  //declare recursion function to iterate over all nodes starting from the root
    if (node.value % 5 === 0 && node.value % 3 === 0) { //check if node value  is divisible by 3 and 5, replace the value with “FizzBuzz”
      node.value = 'FizzBuzz';
    }
    else if (node.value % 3 === 0) { //check if node value  is divisible by 3,replace the value with 'Fizz'
      node.value = 'Fizz';
    }
    else if (node.value % 5 === 0) { //check if node value  is divisible by 5,replace the value with 'Buzz'
      node.value = 'Buzz';
    }
    else {
      node.value = (node.value).toString();//check If the value is not divisible by 3 or 5, turn the number into a String.
    }

    for (let i = 0; i < node.children.length; i++) {//loop over node children array
      traversal(node.children[i]);//call the traversal function with children node
    }
  };
  traversal(kTree.root);
  return kTree;
}



module.exports = {
  Node,
  KArayTree,

  FizzBuzzTree
};
