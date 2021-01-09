'use strict';

const node = require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(val) {
    if (!this.front) {
      let newNode = (val, null);
      this.front = newNode;
      this.rear = newNode;
    } else {
      let newNode = (val, null);
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (!this.front) {
      console.log('Queue is empty!');
      return null;
    } else {
      let currentVal = this.front.value;
      this.front = this.front.next;
      return currentVal;
    }
  }

  peek() {
    if (!this.front) {
      console.log('Queue is empty!');
      return null;
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    if (!this.front) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
