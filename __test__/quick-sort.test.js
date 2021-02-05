'use strict';

let quickSort = require('../challenges/quickSort/quick-sort');

describe('Quick Sort Module', () => {
  it('Should sort an array when array is reversed.', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    expect(quickSort(arr, 0, arr.length)).toEqual([-2, 5, 8, 12, 18, 20,undefined]);
  });
  it('Should sort an array when array has few unique values.', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    expect(quickSort(arr, 0, arr.length)).toEqual([5, 5, 5, 7, 7, 12,undefined]);
  });
  it('Should sort an array when array is almost sorted.', () => {
    let arr = [2, 3, 5, 7, 13, 11];
    expect(quickSort(arr, 0, arr.length)).toEqual([2, 3, 5, 7, 11, 13,undefined]);
  });
});
