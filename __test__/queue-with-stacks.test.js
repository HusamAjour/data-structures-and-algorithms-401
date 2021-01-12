'use strict';

let pseudoQueue = require('../challenges/queueWithStacks/queue-with-stacks');

describe('Stack and Queue Module', () => {

      it('1. Should successfully enqueue into a queue', () => {
        let que = new pseudoQueue();
        que.enqueue(10);
        expect(que.dequeue()).toEqual(10);
      });
    
      it('2. Should successfully enqueue multiple values into a queue', () => {
        let que = new pseudoQueue();
        que.enqueue(10);
        que.enqueue(20);
        que.enqueue(30);a
        expect(que.dequeue()).toEqual(10);
        expect(que.dequeue()).toEqual(20);
        expect(que.dequeue()).toEqual(30);

      });
    
      it('3. Should successfully dequeue out of a queue the expected value', () => {
        let que = new pseudoQueue();
        que.enqueue(10);
        que.enqueue(20);
        que.enqueue(30);
        expect(que.dequeue()).toEqual(10);
      });
    
    
      it('4. Should successfully empty a queue after multiple dequeues', () => {
        let que = new pseudoQueue();
        que.enqueue(20);
        que.enqueue(30);
        que.enqueue(10);
        que.dequeue();
        que.dequeue();
        que.dequeue();
        expect(que.front).toEqual(null);
      });
      it('5. Should successfully instantiate an empty queue', () => {
        let que = new pseudoQueue();
        expect(que.front).toEqual(null);
      });
});
