'use strict';

let LinkedList = require('../challenges/linkedList/linked-list');

describe('Linked List Module', () => {
  it('Should successfully instantiate an empty linked list', () => {
    let ll = new LinkedList();
    expect(ll).toEqual({ head: null });
  });

  it('Should properly insert into the linked list', () => {
    let ll = new LinkedList();
    ll.insert(5);
    expect(ll.toString()).toEqual('{ 5 } -> NULL');
  });
  
  it('Should add a node to the end of the linked list', () => {
    let ll = new LinkedList();
    ll.append(5).append(8).append(10);
    expect(ll.append(12).toString()).toEqual('{ 5 } -> { 8 } -> { 10 } -> { 12 } -> NULL');
  });

  it('The head property should properly point to the first node in the linked list', () => {
    let ll = new LinkedList();
    ll.insert(5);
    ll.insert(10);
    ll.insert(20);
    expect(ll.head.value).toEqual(20);
  });

  it('Should properly insert multiple nodes into the linked list', () => {
    let ll = new LinkedList();
    ll.insert(5);
    ll.insert(10);
    ll.insert(20);
    expect(ll.includes(20)).toBeTruthy();
    expect(ll.includes(10)).toBeTruthy();
    expect(ll.includes(5)).toBeTruthy();
  });

  it('Should return true when finding a value within the linked list that exists', () => {
    let ll = new LinkedList();
    ll.insert(5);
    ll.insert(10);
    ll.insert(20);
    expect(ll.includes(10)).toBeTruthy();
  });

  it('Should return false when searching for a value in the linked list that does not exist', () => {
    let ll = new LinkedList();
    ll.insert(5);
    ll.insert(10);
    ll.insert(20);
    expect(ll.includes(2)).toBeFalsy();
  });

  it('Should properly return a collection of all the values that exist in the linked list', () => {
    let ll = new LinkedList();
    ll.insert(5);
    ll.insert(10);
    ll.insert(20);
    ll.insert('Hi');
    expect(ll.toString()).toEqual(
      '{ Hi } -> { 20 } -> { 10 } -> { 5 } -> NULL'
    );
  });
});
