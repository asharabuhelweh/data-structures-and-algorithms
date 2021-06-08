'use strict';
const { expect } = require('@jest/globals');
const treeify = require('treeify');

const { Node, KArayTree, FizzBuzzTree } = require('./fizz-buzz-tree.js');
let kTree;

describe('', () => {

  beforeAll(() => {
    //       25
    //   1     3       5 
    // 10   15 20 22   

    let one = new Node(25); //'Buzz'
    let child1 = new Node(1);//'1'
    let child2 = new Node(3);//'Fizz'
    let child3 = new Node(5); //'Buzz'
    let child4 = new Node(10); //'Buzz'
    let child5 = new Node(15);//'FizzBuzz
    let child6 = new Node(20);//'Buzz'

    let child7 = new Node(22);//'22'



    one.children[0] = child1;
    one.children[1] = child2;
    one.children[2] = child3;

    one.children[0].children[0] = child4;
    one.children[1].children[0] = child5;
    one.children[1].children[1] = child6;
    one.children[1].children[2] = child7;


    kTree = new KArayTree(one);
    // console.log(treeify.asTree(kTree, true));



  });

  it('happy path', () => {

    console.log(FizzBuzzTree(kTree));
    expect(FizzBuzzTree(kTree).root.value).toEqual('Buzz');
    expect(FizzBuzzTree(kTree).root.children[0].value).toEqual('1');
    expect(FizzBuzzTree(kTree).root.children[1].value).toEqual('Fizz');
    expect(FizzBuzzTree(kTree).root.children[2].value).toEqual('Buzz');
    expect(FizzBuzzTree(kTree).root.children[0].children[0].value).toEqual('Buzz');
    expect(FizzBuzzTree(kTree).root.children[1].children[0].value).toEqual('FizzBuzz');
    expect(FizzBuzzTree(kTree).root.children[1].children[2].value).toEqual('22');


  });

  it(' edge case empty k aray tree, should raise an exception', () => {
    let tree = new KArayTree();
    expect(FizzBuzzTree(tree)).toBe('k-aray Tree Empty is empty!');


  });
});





