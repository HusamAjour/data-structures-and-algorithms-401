'use strict';

let insertionSort = require('../challenges/insertionSort/inserstion-sort');

describe('Insetion Sort Module', () => {
  it('Should sort an array when array is reversed.', () => {
    expect(insertionSort([20,18,12,8,5,-2])).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('Should sort an array when array has few unique values.', () => {
    expect(insertionSort([5,12,7,5,5,7])).toEqual([5,5,5,7,7,12]);
  });
  it('Should sort an array when array is almost sorted.', () => {
    expect(insertionSort([2,3,5,7,13,11])).toEqual([2,3,5,7,11,13]);
  });
});
