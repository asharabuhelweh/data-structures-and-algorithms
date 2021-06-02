'use strict';
const { Queue } = require('../challenges/stacksAndQueues/stacks-and-queues.js');

class AnimalShelter {
  constructor() {
    this.dogsQueue = new Queue;
    this.catsQueue = new Queue;
  }

  enqueue(animal) {
    try 
    { 
      if (animal.type === 'dog') {    //condition to filter the type of inserted animal object 
      this.dogsQueue.Enqueue(animal);  //if the type of the animal equal 'dog' enqueue the animal tp the dogs queue 
    }
    else if (animal.type === 'cat') {   //if the type of the animal equal 'cat' enqueue the animal tp the cats queue 
      this.catsQueue.Enqueue(animal);

    }
    else {
      return  'sorry,this is shelter just for cats and dogs!';
    }
      
    } catch (error) {
      console.error('please insert animal with type');
      
    }
   
  }
  dequeue(pref) {
    
    if (pref === 'dog') {                              //condition to check the pref of the animal cat or dog
      
    let adoptedAnimal=  this.dogsQueue.dequeue();      // if the pref equal 'dog' dequeue(remove the first animal from dogsQueue)
      return adoptedAnimal.type;                         //return the pref or the type of the dequeued animal which 'dog'
    }
    else if (pref === 'cat') {                             // if the pref equal 'cat' dequeue(remove the first animal from catsQueue)
                   
    let adoptedAnimal=  this.catsQueue.dequeue();          
    return adoptedAnimal.type;                                //return the pref or the type of the dequeued animal which 'cat'
    }
   else if (!pref) {
      return 'please insert pref!';
    }
    else {
      return null;
    }
  }


}

module.exports = {
  AnimalShelter: AnimalShelter
}