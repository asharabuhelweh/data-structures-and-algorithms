'use strict';
const Node = require('../node.js');
const LinkedList = require('../linked-list.js');
const { expect } = require('@jest/globals');



describe('linked list', () => {
  it(' should instantiate an empty linked list', () => {

    let linkedList = new LinkedList();
    expect(linkedList.head).toBeNull;
  });

  it('should add new node to empty linked list', () => {
    //arrange
    let linkedList = new LinkedList();// creat an empty linked list  
    let value = 5;
    //act
    linkedList.insert(value);
    //assert
    expect(linkedList.head.value).toEqual(value);
    expect(linkedList.head.next).toBeNull();
  });
})




describe('check the insert method', () => {
  it("should add new Head", () => {
    //arrange
    let linkedList = new LinkedList();

    //act
    linkedList.insert(5);
    linkedList.insert(7); //This is the head
    //assert 
    expect(linkedList.head.value).toEqual(7);
  });

});


describe('check include method', () => {
  it("Should return true if the value exists in the linked list", () => {
    //arrange
    let linkedList = new LinkedList();

    //act
    linkedList.insert(3);
    linkedList.insert(55);
    linkedList.insert(33);
    linkedList.insert(99);

    let existNode = linkedList.includes(33);
    //assert
    expect(existNode).toEqual(true);

  });

  it("Should return false if the value not exist in the linked list", () => {
    let linkedList = new LinkedList();

    linkedList.insert(3);
    linkedList.insert(55);
    linkedList.insert(33);
    linkedList.insert(99);

    let notFound = linkedList.includes(200);

    expect(notFound).toEqual(false);

  });

});


describe('check the toString method', () => {
  it("Should return all the values inside the linked list", () => {
    //arrange
    let linkedList = new LinkedList();

    // act
    linkedList.insert(5);
    linkedList.insert(15);
    linkedList.insert(77);
    linkedList.insert(36);
    let stringLinkedList = linkedList.toString();
    let array = stringLinkedList.split(" ");

    //assert
    expect(array[0]).toEqual("{36}");
    expect(array[2]).toEqual("{77}");
    expect(array[4]).toEqual("{15}");
    expect(array[6]).toEqual("{5}");
    expect(array[8]).toEqual("NULL");
  });
  
});

describe('linked list', () => {

  it('should add a node to the end of the linked list', () => {
    //arrange
    let linkedList = new LinkedList();

    //act
    linkedList.insert(20);
    linkedList.insert(30);
    linkedList.append(40);
    //assert
    expect(linkedList.head.value).toEqual(30);
    expect(linkedList.head.next.value).toEqual(20);
    expect(linkedList.head.next.next.value).toEqual(40);
  });

  it("Should add multiple nodes to the end of a linked list", () => {
    //arrange
    let linkedList = new LinkedList();
    //act
    linkedList.insert(1);
    linkedList.insert(3);
    linkedList.insert(7);
    linkedList.append(2);
    linkedList.append(4);
    linkedList.append(6);
    //assert
    expect(linkedList.toString()).toEqual("{7} -> {3} -> {1} -> {2} -> {4} -> {6} -> NULL");
  });

  
  it('should insert a node before a node located i the middle of a linked list', () => {
    //arrange
    let linkedList = new LinkedList();

    //act
    linkedList.insert(100);
    linkedList.insert(200);
    linkedList.insert(300);
    linkedList.insertBefore(200, 400)
    //assert
    expect(linkedList.head.next.value).toEqual(400);
  });

  it('should insert a node before the first node', () => {
    //arrange
    let linkedList = new LinkedList();

    //act
    linkedList.insert(9);
    linkedList.insert(6);
    linkedList.insert(3);
    linkedList.insertBefore(3, 1)
    //assert
    expect(linkedList.head.value).toEqual(1);
  });

  it('should insert after a node in the middle of the linked list', () => {
    //arrange
    let linkedList = new LinkedList();


    //act
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4)
    linkedList.insertAfter(2, 5)
    //assert
    expect(linkedList.head.next.next.next.value).toEqual(5);
  });

  it("Should add node to the end of the linked list", () => {
    //arrange
    let ll = new LinkedList();
    //act
    ll.insert(5);
    ll.insert(69);
    ll.insert(9);
    ll.append(33);
    //assert
    expect(ll.toString()).toEqual("{9} -> {69} -> {5} -> {33} -> NULL");
  });


  });



describe('check errors in the Linked Lists', () => {

  it('should throw error in insert method', () => {
    //arrange
    let linkedList = new LinkedList();
    //act
    linkedList.insert();

    //assert
    expect(linkedList.head.value).toThrowError;

  });
 

});









