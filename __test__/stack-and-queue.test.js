'use strict';

let stackAndQueue = require('../challenges/stacksAndQueues/stacks-and-queues');
let stack = stackAndQueue.Stack;
let queue = stackAndQueue.Queue;

describe('Stack and Queue Module', () => {
  it('1. Should successfully push onto a stack', () => {
    let st = new stack();
    st.push(10);
    expect(st.peek()).toEqual(10);
  });
  it('2. Should successfully push multiple values onto a stack', () => {
    let st = new stack();
    st.push(10);
    st.push(20);
    st.push(300);
    while (st.top) {
      expect(st.peek()).toEqual(st.pop());
    }
  });
  it('3. Should successfully pop off the stack', () => {
    let st = new stack();
    st.push(10);
    st.push(20);
    st.push(300);
    expect(st.pop()).toEqual(300);
  });
  it('4. Should successfully empty a stack after multiple pops', () => {
    let st = new stack();
    st.push(10);
    st.push(20);
    st.push(300);
    st.pop();
    st.pop();
    st.pop();
    expect(st.top).toEqual(null);
  });
  it('5. Should successfully peek the next item on the stack', () => {
    let st = new stack();
    st.push(10);
    st.push(20);
    st.push(500);
    expect(st.peek()).toEqual(500);
  });
  it('6. Should successfully instantiate an empty stack', () => {
    let st = new stack();
    expect(st.top).toEqual(null);
  });
  it('7. Should raise an exception when calling pop or peek on empty stack', () => {
    let st = new stack();
    expect(st.pop()).toEqual(null);
  });
  it('8. Should successfully enqueue into a queue', () => {
    let que = new queue();
    que.enqueue(10);
    expect(que.peek()).toEqual(10);
  });

  it('9. Should successfully enqueue multiple values into a queue', () => {
    let que = new queue();
    que.enqueue(10);
    que.enqueue(20);
    que.enqueue(30);
    while (que.front) {
      expect(que.peek()).toEqual(que.dequeue());
    }
  });

  it('10. Should successfully dequeue out of a queue the expected value', () => {
    let que = new queue();
    que.enqueue(10);
    que.enqueue(20);
    que.enqueue(30);
    expect(que.dequeue()).toEqual(10);
  });

  it('11. Should successfully peek into a queue, seeing the expected value', () => {
    let que = new queue();
    que.enqueue(20);
    que.enqueue(30);
    que.enqueue(10);
    expect(que.peek()).toEqual(20);
  });

  it('12. Should successfully empty a queue after multiple dequeues', () => {
    let que = new queue();
    que.enqueue(20);
    que.enqueue(30);
    que.enqueue(10);
    que.dequeue();
    que.dequeue();
    que.dequeue();
    expect(que.front).toEqual(null);
  });
  it('13. Should successfully instantiate an empty queue', () => {
    let que = new queue();
    expect(que.front).toEqual(null);
  });

  it('14. Should raise an exception when calling dequeue or peek on empty queue', () => {
    let que = new queue();
    expect(que.front).toEqual(null);
    expect(que.dequeue()).toEqual(null);
  });
});
