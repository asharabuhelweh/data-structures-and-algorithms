'use strict';
const Node=require('../node.js');

describe('node class test',()=>{
  it('should create new object',()=>{
    //arrange
      let value=3;
    //act
       let node = new Node(value);
    //assert
    expect(node.value).toEqual(3);
    expect(node.next).toEqual(null);
  });
});

