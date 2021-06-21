const { expect } = require('@jest/globals');
const Mergesort = require('./merge.js');
describe('merge Sort of an array', () => {
  it('happy path', () => {

    let arr = [5, 68, 2, 7, 98, 36];
    expect(Mergesort(arr)).toEqual([2, 5, 7, 36, 68, 98]);

  });
  it('edge case, not passing an array as a parameter',()=>{

    expect(Mergesort()).toEqual('please pass the array!');

  });
  it('edge case, empty array',()=>{
    let arr=[];

    expect(Mergesort(arr)).toEqual('the array is empty!');

  });

});
