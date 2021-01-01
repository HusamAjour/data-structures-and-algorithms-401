'use strict';


const reverseArray = (arr) => {
  if(arr.length !==0){
    for (var i = 0; i < (arr.length / 2); i++) {
      let el = arr[i];
      arr[i] = arr[(arr.length - 1) - i];
      arr[(arr.length -1)- i] = el;
    }
    return arr;
  } else{
    return [];
  }
}

module.exports = reverseArray;

// Test
// Run npm test __test__/array-shift.test.js

