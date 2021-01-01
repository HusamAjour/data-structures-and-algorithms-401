'use strict';

const insertShiftArray = (arr, val) => {
  if (arr.length !== 0) {
    arr[arr.length] = val;

    for (var i = arr.length - 1; i > arr.length / 2; i--) {
      let el = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = el;
    }
    return arr;
  } else {
    return [val];
  }
};

module.exports = insertShiftArray;

// Test

console.log(insertShiftArray([1, 2, 3, 4, 5, 6], 5));
console.log(insertShiftArray([89, 2354, 3546, 23, 10, -923, 823, -12], 333));

// Run this command to see test results 'node challenges/arrayReverse/array-shift.js'

/*
it('Should work with an array with one element only.', ()=>{
        expect(insertShiftArray([1])).toEqual([1]);
    });
    it('Should work with an empty array by receving an empty array.', ()=>{
        expect(insertShiftArray([])).toEqual([]);
    });
    */
