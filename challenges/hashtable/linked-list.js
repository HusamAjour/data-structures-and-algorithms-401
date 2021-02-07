'use strict';
let Node = require('../linkedList/node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    let newNode = new Node(val, this.head);
    this.head = newNode;
    return this;
  }

  append(val) {
    let newNode = new Node(val, null);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    return this;
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

  insertBefore(val, newVal) {
    let current = this.head;
    if (this.head.value === val) {
      this.insert(newVal);
    }
    while (current.next) {
      if (current.next.value === val) {
        let newNode = new Node(newVal, current.next);
        current.next = newNode;
        break;
      }
      current = current.next;
    }
    if (current === null) {
      console.log(`The value ${val} doesn't exist in the linked list`);
    }
    return this;
  }

  insertAfter(val, newVal) {
    let current = this.head;
    while (current) {
      if (current.value === val) {
        let newNode = new Node(newVal, current.next);
        current.next = newNode;
        break;
      }
      current = current.next;
    }
    if (current === null) {
      console.log(`The value ${val} doesn't exist in the linked list`);
    }
    return this;
  }

  kthFromEnd(k) {
    if (!this.head) {
      console.log('The linked list is empty');
      return null;
    } else if (k < 0) {
      console.log('the k is a negative value');
      return null;
    }
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    current = this.head;
    if (count - 1 < k) {
      console.log('The length of the linked list is shorter than k');
      return null;
    } else if (count - 1 === k) {
      return this.head.value;
    } else {
      while (count - 1 != k && count) {
        count--;
        current = current.next;
      }
    }
    return current.value;
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
  values() {
    //return me the values of the ll in an array by traversing it
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

/* 
let x = new LinkedList();
x.insert(5);
x.insert(10);
x.append(20);
console.log(x.kthFromEnd(0));
console.log(x.kthFromEnd(1));
console.log(x.kthFromEnd(2));
console.log(x.kthFromEnd(-1));
console.log(x.toString());
*/
module.exports = LinkedList;

// Test
// Run npm test __test__/linked-list.test.js
