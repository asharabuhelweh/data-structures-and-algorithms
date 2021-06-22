const { expect } = require('@jest/globals');
const QuickSort = require('./quickSort.js');
describe('merge Sort of an array', () => {
  it('happy path', () => {

    let arr = [5, 68, 2, 7, 98, 36];
    let arr2 = [5, 12, 7, 5, 5, 7];

    let left = 0;
    let right = arr.length - 1;
    expect(QuickSort(arr, left, right)).toEqual([2, 5, 7, 36, 68, 98]);
    expect(QuickSort(arr2, left, right)).toEqual([5, 5, 5, 7, 7, 12]);


  });
  it('edge case, not passing an array and left and right as a parameters', () => {

    expect(QuickSort()).toEqual('please pass the array and left and right!');

  });
  it('edge case, empty array', () => {

    let arr = [];
    let left = 0;
    let right = arr.length - 1;

    expect(QuickSort(arr, left, right)).toEqual('the array is empty!');

  });
  it('edge case,wrong insertion for the parameters', () => {

    let arr = [5, 68, 2, 7, 98, 36];
    let left = 5;
    let right = 20;
    expect(QuickSort(arr, left, right)).toEqual('the left should be 0 and right should be array of length-1,please insert them correctly');

  });

});
