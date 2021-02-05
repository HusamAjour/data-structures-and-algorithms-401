'use strict';
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const pivot = (arr, start) => {
  let pivot = arr[start];
  let pointer = start;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] < pivot) {
      pointer++;
      swap(arr, pointer, i);
    }
  }
  swap(arr, start, pointer);
  return pointer;
};

const quickSort = (arr, start, end) => {
  let pivotIndex = pivot(arr, start);
  if (start >= end) return arr;
  quickSort(arr, start, pivotIndex);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
};
let arr = [2, 3, 5, 7, 13, 11];

console.log(quickSort(arr, 0, arr.length-2));
module.exports = quickSort;
