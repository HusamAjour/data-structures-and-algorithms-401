'use strict';

const node = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    if (!this.top) {
      let newNode = new node(val, null);
      this.top = newNode;
    } else {
      let newNode = new node(val, this.top);
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

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(val) {
    if (!this.front) {
      let newNode = new node(val, null);
      this.front = newNode;
      this.rear = newNode;
    } else {
      let newNode = new node(val, null);
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

module.exports = {
  Queue: Queue,
  Stack: Stack,
};

/*

let st = new Stack();

let que = new Queue();
st.push(10);
st.push(20);
st.push(30);
st.push(40);
st.push(50);
que.enqueue(10);
que.enqueue(20);
que.enqueue(30);
que.enqueue(40);
que.enqueue(50);

console.log(st.isEmpty());
console.log(que.isEmpty());
while (st.top) {
    console.log(st.pop());
  }
while (que.front) {
  console.log(que.dequeue());
}
console.log(st.isEmpty());
console.log(que.isEmpty());
*/
