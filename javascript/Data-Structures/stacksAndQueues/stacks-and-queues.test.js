'use strict';
const {Node,Stack,Queue} =require('./stacks-and-queues');
// const {Stack}=require('./stacks-and-queues');
// const {Queue}=require('./stacks-and-queues');
const { expect } = require('@jest/globals');

describe('Node class',()=>{
  it('should create new node',()=>{
    //arrange
  let value=3;
  //act
  let newNode = new Node(value);
  //assert
  expect(newNode.value).toEqual(3);

  });

});

describe('Stack class',()=>{
  it('should create new empty Stack',()=>{
  //act
  let newStack = new Stack();
  //assert
  expect(newStack.top).toBeNull;
  expect(newStack.size).toEqual(0);

  });

});



describe('Stack Methods',()=>{
  it('should push onto a stack',()=>{
    //arrange
  let value=3;
  //act
  let newStack = new Stack(value);
  newStack.push(value);
  //assert
  expect(newStack.top.value).toEqual(value);

  });

  it('should push multiple values onto a stack',()=>{
    //arrange
  let value=3;
  //act
  let newStack = new Stack(value);
  newStack.push(value);
  newStack.push(44);
  newStack.push(55);

  //assert
  expect(newStack.top.value).toEqual(55);
  expect(newStack.top.next.value).toEqual(44);
  expect(newStack.top.next.next.value).toEqual(3);

  });
  it('should pop off the stack',()=>{
    
  //arrange
  let value=3;
  //act
  let newStack = new Stack(value);
  newStack.push(value);
  newStack.push(44);
  newStack.pop();  
  //assert
  expect(newStack.top.value).toEqual(3);

  });
  it('should empty a stack after multiple pops',()=>{
    
    //arrange
    let value=3;
    //act
    let newStack = new Stack(value);
    newStack.push(value);
    newStack.push(44);
    newStack.pop();
    newStack.pop();  

    //assert
    expect(newStack.top).toBeNull;
    expect(newStack.size).toEqual(0);

    });

    it('Should raise exception when pop on empty stack',()=>{
    
      //act
      let newStack = new Stack();
      
      //assert
      expect(newStack.pop).toThrowError;
  
      });


    it('should peek the next item on the stack ',()=>{
      //arrange
    let value=3;
    //act
    let newStack = new Stack(value);
    newStack.push(value);
    newStack.push(44);
    newStack.push(55);
  
    //assert
    expect(newStack.peek()).toEqual(55);
    
    });

    it('Should raise exception when peek on empty stack',()=>{
    
      //act
      let newStack = new Stack();
      
      //assert
      expect(newStack.peek).toThrowError;
  
      });

      it('should indicate with boolean if the stack is empty',()=>{
        //arrange
      let value=3;
      //act
      let newStack = new Stack(value);
      newStack.push(value);
      newStack.push(44);
      newStack.push(55);
    
      //assert
     expect(newStack.isEmpty().toBeFalsy);
    
      });
      it('should indicate with boolean if the stack is empty',()=>{
        //arrange
      let value=3;
      //act
      let newStack = new Stack(value);
      newStack.push(value);
      newStack.push(44);
     newStack.pop();
     newStack.pop();      
    
      //assert
     expect(newStack.isEmpty().toBeTruthy);
    
      });

});

describe('Queue class',()=>{
  it('should create new empty Queue',()=>{
  //act
  let newQueue = new Queue();
  //assert
  expect(newQueue.rear).toBeNull;
  expect(newQueue.front).toBeNull;
  expect(newQueue.size).toEqual(0);

  });

});


describe('Queue Methods',()=>{
  it('should enqueue new value into a queue',()=>{
    //arrange
  let value=3;
  //act
  let newQueue = new Queue(value);
  newQueue.Enqueue(value);
  //assert
  expect(newQueue.front.value).toEqual(value);

  });

  it('should enqueue multiple values onto a queue',()=>{
    //arrange
  let value=3;
  //act
  let newQueue = new Queue(value);
  newQueue.Enqueue(value);
  newQueue.Enqueue(44);
  newQueue.Enqueue(55);

  //assert
  //3-44-55
  expect(newQueue.front.value).toEqual(3);
  expect(newQueue.front.next.value).toEqual(44);
  expect(newQueue.front.next.next.value).toEqual(55);
   
  });
  it('should dequeue out of a queue',()=>{
    
  //arrange
  let value=3;
  //act
  let newQueue = new Queue(value);
  newQueue.Enqueue(value);
  newQueue.Enqueue(44);
  newQueue.dequeue();  
  //assert
  //3-44
  expect(newQueue.rear.value).toEqual(44);

  });
  it('should empty a Queue after multiple dequeues',()=>{
    
    //arrange
    let value=3;
    //act
    let newQueue = new Queue(value);
    newQueue.Enqueue(value);
    newQueue.Enqueue(44);
    newQueue.dequeue();
    newQueue.dequeue();  

    //assert
    expect(newQueue.front).toBeNull;

    });

    it('Should raise exception when dequeue on empty Queue',()=>{
    
      //act
      let newQueue = new Queue();
      
      //assert
      expect(newQueue.dequeue).toThrowError;
  
      });


    it('should peek the next item on the Queue ',()=>{
      //arrange
    let value=3;
    //act
    let newQueue = new Queue(value);
    newQueue.Enqueue(value);
    newQueue.Enqueue(44);
    newQueue.Enqueue(55);
    //3-44-55
  
    //assert
    expect(newQueue.peek()).toEqual(3);
    
    });

    it('Should raise exception when peek on empty Queue',()=>{
    
      //act
      let newQueue = new Queue();
      
      //assert
      expect(newQueue.peek).toThrowError;
  
      });

      it('should indicate with boolean if the Queue is empty',()=>{
        //arrange
      let value=3;
      //act
      let newQueue = new Queue(value);
      newQueue.Enqueue(value);
      newQueue.Enqueue(44);
      newQueue.Enqueue(55);
    
      //assert
     expect(newQueue.isEmpty().toBeFalsy);
    
      });
      it('should indicate with boolean if the Queue is empty',()=>{
        //arrange
      let value=3;
      //act
      let newQueue = new Queue(value);
      newQueue.Enqueue(value);
      newQueue.Enqueue(44);
     newQueue.dequeue();
     newQueue.dequeue();      
    
      //assert
     expect(newQueue.isEmpty().toBeTruthy);
    
      });

});