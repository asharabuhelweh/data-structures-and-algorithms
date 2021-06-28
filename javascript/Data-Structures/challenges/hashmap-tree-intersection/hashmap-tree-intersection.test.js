'use strict';

const Node = require('../tree/node.js');

const { BinaryTree } = require('../tree/tree.js');

const treeIntersection = require('./hashmap-tree-intersection');


describe('hash map treeIntersection Test', () => {
  let BT1, BT2, BT3,BT4;
  beforeAll(() => {
    BT1 = new BinaryTree();
    BT2 = new BinaryTree();
    BT3 = new BinaryTree();
    BT4 = new BinaryTree();


    //BT1
    const one1 = new Node(30);
    let tow = new Node(120);
    let three = new Node(99);
    let four = new Node(6);
    let five = new Node(88);
    BT1.root = one1;
    one1.right = tow;
    tow.left = three;
    three.left = four;
    three.right = five;

    //BT2
    const one2 = new Node(30);
    let tow2 = new Node(55);
    let three2 = new Node(99);
    let four2 = new Node(120);
    let five2 = new Node(10);
    BT2.root = one2;
    one2.left = tow2;
    one2.right = three2;
    three2.left = four2;
    four2.left = five2;
    //BT3
    let one3 = new Node(10);
    let tow3 = new Node(98);
    let three3 = new Node(77);
    let four4 = new Node(7);
    BT3.root = one3;
    one3.right = tow3;
    one3.left = three3;
    three3.right = four4;

  });
  it('happy path, return the matching values between toe trees', () => {
    expect(treeIntersection(BT1, BT2)).toEqual([30, 99, 120]);
  });
  it('happy path, return the matching values between toe trees', () => {
    expect(treeIntersection(BT2, BT3)).toEqual([10]);
  });
  it('raise an exception if there os no matching values ', () => {
    expect(treeIntersection(BT1, BT3)).toEqual('sorry,but there is no matching values between the trees');
  });
  it('return an exception if the trees is empty', () => {
    expect(treeIntersection(BT1, BT4)).toEqual('the tree is empty!');
  });

});
