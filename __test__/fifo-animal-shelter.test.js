'use strict';

const shelter = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');

describe('Stack and Queue Module', () => {
  it('1. Should successfully enqueue into the shelter', () => {
    let que = new shelter();
    que.enqueue('cat');
    expect(que.dequeue('cat')).toEqual('cat');
  });

  it('2. Should successfully enqueue multiple values into a the shelter', () => {
    let que = new shelter();
    que.enqueue('cat');
    que.enqueue('cat');
    que.enqueue('dog');
    expect(que.dequeue('cat')).toEqual('cat');
    expect(que.dequeue('dog')).toEqual('dog');
    expect(que.dequeue('cat')).toEqual('cat');
  });

  it('3. Should successfully dequeue out of a shelter the expected animal', () => {
    let que = new shelter();
    que.enqueue('cat');
    que.enqueue('cat');
    que.enqueue('dog');
    expect(que.dequeue('dog')).toEqual('dog');
  });

  it('4. Should  dequeue out of a shelter only cats and dogs', () => {
    let que = new shelter();
    que.enqueue('cat');
    que.enqueue('cat');
    que.enqueue('dog');
    expect(que.dequeue('lion')).toEqual(null);
  });
});
