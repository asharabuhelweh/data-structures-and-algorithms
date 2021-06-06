'use strict';
const { expect } = require('@jest/globals');
const treeify = require('treeify');
const Node = require('./node.js');
const { BinaryTree, BinarySearchTree } = require('./tree.js');
let tree = null;
let tree1 = null;
let tree2 = null;
let BSTree = null;


beforeAll(() => {
  let one = new Node(10);
  let tow = new Node(15);
  let three = new Node(5);
  let four = new Node(17);
  let five = new Node(12);
  let six = new Node(7);
  let seven = new Node(3);

  one.left = three;
  one.right = tow;
  tow.left = five;
  tow.right = four;
  three.left = seven;
  three.right = six;
  tree = new BinaryTree(one);


  tree2 = new BinaryTree();



  // console.log(one);
  // console.log(tow);
  // console.log(treeify.asTree(tree, true));




});

describe('binary tree', () => {
  it('Can successfully instantiate an empty tree', () => {

    expect(tree2.root).toEqual(null);

  });
  it('Can successfully instantiate a tree with a single root node', () => {
    let lonely = new Node(55);
    tree1 = new BinaryTree(lonely);

    expect(tree1.root.value).toEqual(55);
    expect(tree1.root.right).toEqual(null);
    expect(tree1.root.left).toEqual(null);



  });
  it('Can successfully add a left child and right child to a single root node', () => {
    let lonely = new Node(55);
    tree1 = new BinaryTree(lonely);
    let rightChild = new Node(10);
    let leftChild = new Node(6);
    lonely.right = rightChild;
    lonely.left = leftChild;


    expect(tree1.root.value).toBe(55);
    expect(tree1.root.right.value).toEqual(10);
    expect(tree1.root.left.value).toEqual(6);


  });


  it('should return a collection from a preOrder traversal', () => {
    //[10-5-3-7-15-12-17]
    //arrange
    let expected = [10, 5, 3, 7, 15, 12, 17];
    //act
    let preOrderResult = tree.preOrder();
    //assert
    expect(preOrderResult).toEqual(expected);

  });
  it('should return a collection from a inOrder traversal', () => {
    //arrange
    let expected = [3, 5, 7, 10, 12, 15, 17];
    //act
    let inOrderResult = tree.inOrder();
    //assert
    expect(inOrderResult).toEqual(expected);

  });

  it('should return a collection from a postOrder traversal', () => {
    //arrange
    let expected = [3, 7, 5, 12, 17, 15, 10];
    //act
    let postOrderResult = tree.postOrder();
    //assert
    expect(postOrderResult).toEqual(expected);
  });
  it('edge cases,raise exception when preOrder transverse into empty binary tree  ', () => {
    expect(tree2.Order).toThrowError;
  });

  it('edge cases,raise exception when inOrder transverse into empty binary tree  ', () => {
    expect(tree2.ineOrder).toThrowError;
  });

  it('edge cases,raise exception when postOrder transverse into empty binary tree  ', () => {
    expect(tree2.postOrder).toThrowError;
  });



});

beforeAll(() => {
  BSTree = new BinarySearchTree();
});
describe('binary search tree', () => {
  it('Can successfully instantiate an empty tree', () => {

    expect(BSTree.root).toEqual(null);

  });

  it('Can successfully instantiate a tree with a single root node', () => {
    BSTree.add(55);
    expect(BSTree.root.value).toEqual(55);
    expect(BSTree.root.right).toEqual(null);
    expect(BSTree.root.left).toEqual(null);



  });

  it('Can successfully add a left child and right child to a single root node', () => {
    BSTree.add(15);
    BSTree.add(75);


    expect(BSTree.root.right.value).toEqual(75);
    expect(BSTree.root.left.value).toEqual(15);
    // console.log(treeify.asTree(BSTree, true));



  });
  it('edge cases,raise exception when passing no value in add method', () => {

    expect(BSTree.add()).toBe('please insert valid value!');
  });




  it('Can successfully search for a value and return boolean if it exist or not', () => {



    expect(BSTree.contains(55)).toBeTruthy;
    expect(BSTree.contains(15)).toBeTruthy;


    expect(BSTree.contains(78)).toBeFalsy;
    expect(BSTree.contains(3)).toBeFalsy;



    // console.log(treeify.asTree(BSTree, true));



  });
  it('edge cases,raise exception when the Binary Search Tree is empty!', () => {
    let empty = new BinarySearchTree();

    expect(empty.contains(5)).toBe('the Binary Search Tree is empty!');
  });


});


describe('findMax method', () => {
  it('happy path', () => {
    expect(tree.findMaximumValue()).toBe(17);
  });
  it(' edge case, empty tree', () => {
    let tree8=new BinaryTree();
    expect(tree8.findMaximumValue()).toBe('the Binary Tree is empty!');
  });



});



