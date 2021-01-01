'use strict';

let reverseArray = require('../challenges/arrayReverse/array-reverse');

describe('Array Shift Module', () => {
  it('Should return the received array reversed.', () => {
    expect(reverseArray([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
  });
  it('Should work with an array with one element only.', () => {
    expect(reverseArray([1])).toEqual([1]);
  });
  it('Should work with an empty array by receving an empty array.', () => {
    expect(reverseArray([])).toEqual([]);
  });
});
