'use srtict';
const merge = (left, right) => {
  let resultArray = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      resultArray.push(left[i]);
      i++;
    } else {
      resultArray.push(right[j]);
      j++;
    }
  }

  return resultArray.concat(left.slice(i)).concat(right.slice(j));
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([20, 18, 12, 8, 5, -2]));

module.exports = mergeSort;
