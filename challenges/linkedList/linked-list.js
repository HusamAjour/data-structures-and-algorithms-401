'use strict';
let Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    let newNode = new Node(val, this.head);
    this.head = newNode;
  }
  includes(val) {
    let current = this.head;
    while (current) {
      if (current.value === val) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }
  toString() {
    let str = '';
    if (this.head !== null) {
      let current = this.head;
      while (current) {
        str = `${str}{ ${current.value} } -> `;
        current = current.next;
      }
      return str + 'NULL';
    }
    return 'NULL';
  }
}

module.exports = LinkedList;

// Test
// Run npm test __test__/linked-list.test.js
