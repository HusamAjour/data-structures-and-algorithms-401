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
// Run npm test __test__/array-shift.test.js