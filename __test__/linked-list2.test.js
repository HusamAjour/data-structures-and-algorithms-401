'use strict';

let LinkedList = require('../challenges/linkedList/linked-list');

describe('Linked List Module', () => {

  it('Should add a node to the end of the linked list', () => {
    let ll = new LinkedList();
    ll.append(5).append(8).append(10);
    expect(ll.append(12).toString()).toEqual('{ 5 } -> { 8 } -> { 10 } -> { 12 } -> NULL');
  });

  it('Should add a node to the end of the linked list', () => {
    let ll = new LinkedList();
    ll.append(5).append(8).append(10);
    expect(ll.append(13).toString()).toEqual('{ 5 } -> { 8 } -> { 10 } -> { 13 } -> NULL');
    expect(ll.append(14).toString()).toEqual('{ 5 } -> { 8 } -> { 10 } -> { 13 } -> { 14 } -> NULL');
  });

  it('Should successfully insert a node before a node located i the middle of a linked list', () => {
    let ll = new LinkedList();
    ll.append(5).append(8).append(10);
    expect(ll.insertBefore(8, 13).toString()).toEqual('{ 5 } -> { 13 } -> { 8 } -> { 10 } -> NULL');
    expect(ll.insertBefore(20, 14).toString()).toEqual('{ 5 } -> { 13 } -> { 8 } -> { 10 } -> NULL');
  });

  it('Should successfully insert a node before the first node of a linked list', () => {
    let ll = new LinkedList();
    ll.append(5).append(8).append(10);
    expect(ll.insertBefore(5, 13).toString()).toEqual('{ 13 } -> { 5 } -> { 8 } -> { 10 } -> NULL');
  });
  
  it('Should  successfully insert after a node in the middle of the linked list', () => {
    let ll = new LinkedList();
    ll.append(5).append(8).append(10);
    expect(ll.insertAfter(8, 13).toString()).toEqual('{ 5 } -> { 8 } -> { 13 } -> { 10 } -> NULL');
    expect(ll.insertAfter(20, 14).toString()).toEqual('{ 5 } -> { 8 } -> { 13 } -> { 10 } -> NULL');
  });

  it('Should successfully insert a node after the last node of the linked list', () => {
    let ll = new LinkedList();
    ll.append(5).append(8).append(10);
    expect(ll.insertAfter(10, 13).toString()).toEqual('{ 5 } -> { 8 } -> { 10 } -> { 13 } -> NULL');
  });
});
