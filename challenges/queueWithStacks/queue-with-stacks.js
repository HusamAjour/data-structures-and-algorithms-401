'use strict';

const Stack = require('../stacksAndQueues/stack');

class PseudoQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(val) {
    if (!this.front) {
      this.stack1.push(val);
      this.front = this.stack1.top;
    } else {
      this.stack1.push(val);

    }
  }

  dequeue() {
    if (!this.stack1.top) {
      console.log('Queue is empty!');
      return null;
    } else {
      while (this.stack1.top) {
        this.stack2.push(this.stack1.pop());
      }
      let remvovedVal = this.stack2.pop();
      this.front = this.stack2.top;
      while (this.stack2.top) {
        this.stack1.push(this.stack2.pop());
      }
      return remvovedVal;
    }
  }
}

module.exports = PseudoQueue;

/*let pseQ = new PseudoQueue();

pseQ.enqueue(10);
pseQ.enqueue(20);
pseQ.enqueue(30);
pseQ.enqueue(40);
pseQ.enqueue(50);
console.log(pseQ.dequeue());

while (pseQ.front) {
  console.log(pseQ.front);
  console.log(pseQ.dequeue());
}*/