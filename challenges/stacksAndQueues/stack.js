'use strict';

const node = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    if (!this.top) {
      let newNode = new node(val, this.top.next);
      this.top = newNode;
    } else {
      let newNode = (val, null);
      this.top = newNode;
    }
  }

  pop() {
    if (!this.top) {
      console.log('Stack is empty!');
      return null;
    } else {
      let prevVal = this.top.value;
      this.top = this.top.next;
      return prevVal;
    }
  }

  peek() {
    if (!this.top) {
      console.log('Stack is empty!');
      return null;
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
