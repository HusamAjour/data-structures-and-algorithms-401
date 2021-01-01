'use strict';

let arrayBinarySearch = require('../challenges/arrayBinarySearch/array-binary-search');


describe('Array Binary Search Module', () => {
    it('Should return the index of the element if the element exists in the array', ()=>{
        expect(arrayBinarySearch([1, 2, 3, 4, 5,6], 5)).toEqual([1,2,3,4,5,6].indexOf(5));
    });

    it('Should  -1 the if the element does not exist in the array', ()=>{
        expect(arrayBinarySearch([1, 2, 3, 4, 5, 6], 10)).toEqual(-1);
    });
   
    it('Should work if the array is empty', ()=>{
        expect(arrayBinarySearch([], 10)).toEqual(-1);
    });
    
});