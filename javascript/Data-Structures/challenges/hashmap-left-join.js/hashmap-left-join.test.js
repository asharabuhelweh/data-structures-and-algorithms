'use strict';

const { expect } = require('@jest/globals');
const joinLeft = require('./hashmap-left-join.js');
const { HashTable } = require('../hashtable/hashtable.js');

describe('Join left', () => {
  it('happy path ', () => {
    let table1 = new HashTable(1021);
    let table2 = new HashTable(1021);


    table1.add('ashar', 'angry');
    table1.add('hadeel', 'strong');
    table1.add('shadi', 'sad');
    table1.add('ahmad', 'stronger');
    table1.add('mom', 'the best');

    table2.add('ashar', 'sensitive');
    table2.add('hadeel', 'sweet');
    table2.add('shadi', 'kind');
    table2.add('mom', 'love');
    table2.add('taj', 'nope');


    let output = [
      ['mom', 'the best', 'love'],
      ['ashar', 'angry', 'sensitive'],
      ['ahmad', 'stronger', null],
      ['hadeel', 'strong', 'sweet'],
      ['shadi', 'sad', 'kind']
    ];


    let joinleftArr = joinLeft(table1, table2);
    console.log(joinleftArr);
    expect(joinleftArr).toEqual(output);


  });
  it('no matching keys in the tow tables', () => {
    let table5 = new HashTable(1021);
    table5.add('lana', 'sad');
    table5.add('samer', 'more sad');

    let table1 = new HashTable(1021);
    table1.add('ashar', 'angry');
    table1.add('hadeel', 'strong');
    table1.add('shadi', 'sad');
    table1.add('ahmad', 'stronger');
    table1.add('mom', 'the best');

    let join = joinLeft(table1, table5);
    console.log(join);
    let output2 = [
      ['mom', 'the best', null],
      ['ashar', 'angry', null],
      ['ahmad', 'stronger', null],
      ['hadeel', 'strong', null],
      ['shadi', 'sad', null]
    ];
    expect(joinLeft(table1, table5)).toEqual(output2);
  });

  it('should raise an exception when invoke the function without parameters ', () => {
    expect(joinLeft()).toBe('please insert parameters,table1 and table2');
  });
  it('throw error when the table is empty', () => {
    let table3 = new HashTable(1021);
    let table4 = new HashTable(1021);


    expect(joinLeft(table3, table4)).toThrowError;
  });


});
