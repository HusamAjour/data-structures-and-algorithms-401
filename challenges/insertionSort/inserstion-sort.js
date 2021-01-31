'use srtict';

const insertionSort = (arr) => {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

module.exports = insertionSort;
