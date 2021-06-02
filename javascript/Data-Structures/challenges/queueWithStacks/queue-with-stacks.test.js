'use strict';
const {Node,Stack,PseudoQueue}=require('./queue-with-stacks.js');
const { expect } = require('@jest/globals');


describe('enqueue method',()=>{
  it('should add value to the queue',()=>{
      //arrange
      let queue= new PseudoQueue();
      //act
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      let value =4;
      queue.enqueue(value)
      //assert
      expect(queue.stack1.top.value).toEqual(4);

  });
  it ('should throw an error when enqueue without value,edge cases ',()=>{
//arrange
let queue= new PseudoQueue();

    expect(queue.enqueue()).toThrowError;

  });
  
});

describe('dequeue method',()=>{
  it('it should dequeue value ',()=>{
    let queue=new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

  
    expect(queue.dequeue()).toEqual(1);
  });
  it ('should throw an error when dequeue empty queue,failure cases ',()=>{
    //act
    let queue= new PseudoQueue();
       //assert
        expect(queue.dequeue()).toThrowError;
    
      });


});