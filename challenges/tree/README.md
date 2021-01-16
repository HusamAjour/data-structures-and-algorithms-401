# Trees

## Challenge

create a BinaryTree class with a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately. Also create a BinarySearchTree class
with a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree and a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency

* Any tree should have a node root that has a value and points to its left node and right node.
* You can add to the list by checking whether to go left or right by comparing with the value and the new node value.
* Should traverse in order, post order nad pre order.
* Can check if a certian value is in the tree.

## API

### `insert(value)`

The `insert()` method adds a new node to begining of the list, which makes it the new head of the list. The big O of this method is O(1) since there is no need to use any loops to insert a node to the begining of the list.

### `append(value)`

The `append()` method adds a new node to end of the list, which can be done by treversing through all the nodes till reach the last one and point it to the new node and point the new node to null. The big O of this method is O(1) if the list is empty, if not O(n) since it traverse through all the nodes  to insert a node to the end of the list.

### `add(value)`

The `add()` method adds a new node the tree, and if compares if the new value is less than the current value it goes to left if not, it goes to right.

### `contains(value)`

The `contains()` method checks if a value exists in a tree.

### `preOrder()`

The `preOrder()` traverses through the tree and returns an array with tree values in pre order traversal(root >> left >> right)

### `inOrder()`

The `inOrder()` traverses through the tree and returns an array with tree values in in order traversal(left >> root >> right)

### `postOrder()`

The `postOrder()` traverses through the tree and returns an array with tree values in post order traversal(left >> right >> root)

