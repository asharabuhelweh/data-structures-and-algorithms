const { expect } = require('@jest/globals');
const InsertionSort = require('./InsertionSort.js');
describe('Insertion Sort of array', () => {
  it('happy path', () => {

    let arr = [5, 68, 2, 7, 98, 36];
    expect(InsertionSort(arr)).toEqual([2, 5, 7, 36, 68, 98]);

  });
  it('edge case, not passing an array as a parameter',()=>{

    expect(InsertionSort()).toEqual('please pass the array!');

  });
  it('edge case, empty array',()=>{
    let arr=[];

    expect(InsertionSort(arr)).toEqual('the array is empty!');

  });

});
