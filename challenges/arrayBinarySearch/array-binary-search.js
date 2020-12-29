'use strict';


const arrayBinarySearch = (arr, val) => {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === val) return mid;

        else if (arr[mid] < val)
            start = mid + 1;
        else
            end = mid - 1;
    }

    return -1;
}


// Test

console.log(arrayBinarySearch([4, 8, 15, 16, 23, 42], 15));
console.log(arrayBinarySearch([11, 22, 33, 44, 55, 66, 77], 90));


// Run this command to see test results 'node challenges/arrayReverse/array-reverse.js'