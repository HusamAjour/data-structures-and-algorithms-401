'use strict';

const LinkedList = require('../linkedList/linked-list');
const linkedlist = require('../linkedList/linked-list');

const zipLists = (ll1, ll2) => {
  if (!ll1.head && !ll2.head) {
    console.log('both linked lists are empty');
    return null;
  } else if (!ll1.head && ll2.head) {
    return ll2.head;
  } else if (ll1.head && !ll2.head) {
    return ll1.head;
  }
  let counter = 0;
  let newHead = ll1.head;
  let current = ll1.head;
  let currentLL2 = ll2.head;
  let currentLL1 = current.next;
  while (currentLL2 || currentLL1) {
      if (counter % 2 === 0) {
      counter++;
      if (!currentLL2) {
        continue;
      }
      current.next = currentLL2;
      current = current.next;
      currentLL2 = currentLL2.next;
    } else {
      counter++;
      if (!currentLL1) {
        continue;
      }
      current.next = currentLL1;
      current = current.next;
      currentLL1 = currentLL1.next;
    }
  }
  return newHead;
};


module.exports = zipLists;


let x1 = new LinkedList().append(3).append(9).append(25);
let x2 = new LinkedList().append(5).append(10).append(20);
console.log();
let x = zipLists(x2, x1);
console.log(x.toString());