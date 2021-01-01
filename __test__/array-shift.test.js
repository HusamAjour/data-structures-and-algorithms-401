'use strict';

let insertShiftArray = require('../challenges/arrayShift/array-shift');


describe('Array Shift Module', () => {
    it('Should shift the array and insert this value into the middle of the array without removing any existing value.', ()=>{
        expect(insertShiftArray([1, 2, 3, 4, 5,6], 5)).toEqual([1,2,3,5,4,5,6]);
    });

    it('Should work with an array with one element and insert the new element as last element.', ()=>{
        expect(insertShiftArray([1],2)).toEqual([1,2]);
    });

    it('Should work with an empty array', ()=>{
        expect(insertShiftArray([],10)).toEqual([10]);
    });
    
});