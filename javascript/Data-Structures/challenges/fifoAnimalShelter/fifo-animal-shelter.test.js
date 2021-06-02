'use strict';
const { expect } = require('@jest/globals');
const {AnimalShelter}= require('./fifo-animal-shelter.js');

describe('enqueue method',()=>{
  it('should add new animal',()=>{
    //arrange
    let animal1={
      name:'lolo',
      type:'cat',
      age:3
    }
    let animal2={
      name:'paty',
      type:'dog',
      age:1
    }

    //act
    let shelter =new AnimalShelter();
    shelter.enqueue(animal1)
    shelter.enqueue(animal2);
    //assert
expect(shelter.dogsQueue.front.value.type).toBe('dog');
expect(shelter.catsQueue.front.value.type).toBe('cat');


  });
    
  
  it('edge case, insert different type than dog and cat',()=>{
     //arrange
     let animal3={
      name:'zozo',
      type:'bird',
      age:3
    }
    //act
    let shelter =new AnimalShelter();
let result=shelter.enqueue(animal3);

    //assert
    expect(result).toBe('sorry,this is shelter just for cats and dogs!');
  });

  it ('should throw an error when enqueue without value,edge cases ',()=>{
    //arrange
    let shelter= new AnimalShelter();
    
        expect(shelter.enqueue()).toThrowError;
    
      });


})

describe('dequeue method',()=>{
  it('should dequeue an animal depending on the insert pref',()=>{
    //arrange
    let animal1={
      name:'lolo',
      type:'cat',
      age:3
    }
    let animal2={
      name:'paty',
      type:'dog',
      age:1
    }

    //act
    let shelter =new AnimalShelter();
    shelter.enqueue(animal1)
    shelter.enqueue(animal2);


    //assert
expect(shelter.dequeue('cat')).toBe('cat');
expect(shelter.dequeue('dog')).toBe('dog');


  });
    
  
  it('edge case, dequeue different pref than dog and cat',()=>{
     //arrange
     let animal3={
      name:'lolo',
      type:'cat',
      age:3
    }
    //act
    let shelter =new AnimalShelter();
    shelter.enqueue(animal3);

    //assert
    expect(shelter.dequeue('bird')).toBe(null);
  });

  it ('edge case, should raise exception when dequeue without pref ',()=>{
    //arrange
    let shelter= new AnimalShelter();
    let animal3={
      name:'lolo',
      type:'cat',
      age:3
    }
     //act
     shelter.enqueue(animal3);

    
        expect(shelter.dequeue()).toBe('please insert pref!');
    
      });



})