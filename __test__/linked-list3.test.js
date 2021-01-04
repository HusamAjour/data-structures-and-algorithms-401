'use strict';

let LinkedList = require('../challenges/linkedList/linked-list');

describe('kthFromEnd() Method', () => {

  it('Should return null if the linked list is empty', () => {
    let ll = new LinkedList();
    expect(ll.kthFromEnd(0)).toEqual(null);
  });

  it('Should return null if k is negative', () => {
    let ll = new LinkedList().append(2).append(10);
    expect(ll.kthFromEnd(-2)).toEqual(null);
  });

  it('Should return null if k is greater than the linked list length', () => {
    let ll = new LinkedList().append(2).append(10).append(8).append(3).append(5);
    expect(ll.kthFromEnd(8)).toEqual(null);
  });
  
  it('Should work with a linked list of size 1', () => {
    let ll = new LinkedList().append(2);
    expect(ll.kthFromEnd(0)).toEqual(2);
  });

  it('Should return null if k equals to the length of the list since the indexing starts from 0', () => {
    let ll = new LinkedList().append(2).append(10).append(8).append(3).append(5);
    expect(ll.kthFromEnd(5)).toEqual(null);
  });

  it('Should successfully work with k not in the end but in the middle', () => {
    let ll = new LinkedList().append(2).append(10).append(8).append(3).append(5);
    expect(ll.kthFromEnd(2)).toEqual(8);
  });

});
