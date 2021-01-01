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

module.exports = arrayBinarySearch;



// Test
// Run npm test __test__/array-binary-search.test.js
