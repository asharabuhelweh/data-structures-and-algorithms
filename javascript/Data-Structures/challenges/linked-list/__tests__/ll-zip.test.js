'use strict';
const Node = require('../node.js');
const LinkedList = require('../linked-list.js');
const ZipLL = require('../ll-zip.js');
const { expect } = require('@jest/globals');


describe('zip Linked Lists', () => {
  it('should zip tow linked lists into one when the second longer than the first', () => {

    //arrange
    let LL1 = new LinkedList();
    let LL2 = new LinkedList();
    LL1.insert(1);
    LL1.insert(3);
    LL1.append(5);
    LL2.insert('a');
    LL2.insert('b');
    LL2.insert('c');
    LL1.append('d');

    //act
    let zip = ZipLL(LL1, LL2);
    //assert
    expect(zip.head.value).toBe(3);
    expect(zip.head.next.value).toBe('c');
    expect(zip.head.next.next.value).toBe(1);
    expect(zip.head.next.next.next.value).toBe('b');
    expect(zip.head.next.next.next.next.value).toBe(5);
    expect(zip.head.next.next.next.next.next.value).toBe('a');
    expect(zip.head.next.next.next.next.next.next.value).toBe('d');


  });


  it('should zip tow linked lists into one when the first is longer', () => {

    //arrange
    let LL1 = new LinkedList();
    let LL2 = new LinkedList();
    LL1.insert(100);
    LL1.insert(200);
    LL1.insert(300);
    LL1.append(400);

    LL2.insert('a');
    LL2.insert('b');

    //act
    let zip = ZipLL(LL1, LL2);
    //assert
    expect(zip.head.value).toBe(300);
    expect(zip.head.next.value).toBe('b');
    expect(zip.head.next.next.value).toBe(200);
    expect(zip.head.next.next.next.value).toBe('a');
    expect(zip.head.next.next.next.next.value).toBe(100);
    expect(zip.head.next.next.next.next.next.value).toBe(400);




  });





  it('Edge case , passing no parameter or undefined value', () => {

    let zipLL =ZipLL();
    

    

    expect(zipLL).toBe('please insert valid values!');




  });

});



