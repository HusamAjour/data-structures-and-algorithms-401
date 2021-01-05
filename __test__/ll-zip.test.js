'use strict';
let LinkedList = require('../challenges/linkedList/linked-list');
let zipLists = require('../challenges/llZip/ll-zip');

describe('zipLists() Module', () => {
  it('Should return null if both linked list are empty', () => {
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();
    expect(zipLists(ll1, ll2)).toEqual(null);
  });
  it('Should work if the first linked list is empty', () => {
    let ll1 = new LinkedList();
    let ll2 = new LinkedList().append(5).append(10).append(20);
    expect(ll2.toString()).toEqual('{ 5 } -> { 10 } -> { 20 } -> NULL');
  });
  it('Should work if the second linked list is empty', () => {
    let ll2 = new LinkedList();
    let ll1 = new LinkedList().append(5).append(10).append(20);
    expect(ll1.toString()).toEqual('{ 5 } -> { 10 } -> { 20 } -> NULL');
  });

  it('Should zip two lists together', () => {
    let ll1 = new LinkedList().append(3).append(9).append(25);
    let ll2 = new LinkedList().append(5).append(10).append(20);
    zipLists(ll1, ll2);
    expect(ll1.toString()).toEqual(
      '{ 3 } -> { 5 } -> { 9 } -> { 10 } -> { 25 } -> { 20 } -> NULL'
    );
  });
  it('Should work also if the parameters are switched', () => {
    let ll1 = new LinkedList().append(5).append(10).append(20);
    let ll2 = new LinkedList().append(3).append(9).append(25);
    zipLists(ll1, ll2);
    expect(ll1.toString()).toEqual(
      '{ 5 } -> { 3 } -> { 10 } -> { 9 } -> { 20 } -> { 25 } -> NULL'
    );


});
it('Should work if linked lists have differnet lengths', () => {
    let ll1 = new LinkedList().append(5).append(10)
    let ll2 = new LinkedList().append(3).append(9).append(25).append(20);;
    zipLists(ll1, ll2);
    expect(ll1.toString()).toEqual(
      '{ 5 } -> { 3 } -> { 10 } -> { 9 } -> { 25 } -> { 20 } -> NULL'
    );
});

});