# Stack and Queue

## Challenge

The challenge is to create a stack and a queue, both consist of a set of nodes, each node has to properties: a value, and a referece to the next node in the stack or the queue. In the stack FILO and in the queue FIFO.

## Approach & Efficiency

* Any stack should have a top, and any queue should has a front.
* If the stack and the queue are empty, the top and the front should be null.
* If the stack is not empty, the top should point to the last node that was added to the stack.
* If the queue is not empty, the front should point to the first node that was added to the queue.

## Stack API

### `isEmpty()`

The `isEmpty()` method checks if the stack is empty bu checking the top value of the stack. The big O of this method is O(1) since is only uses one itteration.

### `peek()`

The `peek()` method return the value of the top node's value in the stack, and returns null if the stack is empty. The big O of this method is O(1) since is only uses one itteration.

### `push(val)`

The `push(val)` method adds a new node to top of the stack. The big O of this method is O(1) since is only uses one itteration.

### `pop()`

The `pop()` method removes the top node of the stack and returns its value, and if the stack is empty it returns null. The big O of this method is O(1) since is only uses one itteration.

## Queue API

### `isEmpty()`

The `isEmpty()` method checks if the queue is empty bu checking the front value of the stack. The big O of this method is O(1) since is only uses one itteration.

### `peek()`

The `peek()` method return the value of the front node's value in the queue, and returns null if the stack is empty. The big O of this method is O(1) since is only uses one itteration.

### `enqueue(val)`

The `enqueue(val)` method adds a new node to end of the queue. The big O of this method is O(1) since is only uses one itteration.

### `dequeue()`

The `dequeue()` method removes the front node of the queue and returns its value, and if the queue is empty it returns null. The big O of this method is O(1) since is only uses one itteration.
