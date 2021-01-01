# Linked List

## Challenge

The challenge is to create a linked list which consists of a set of nodes, each node has to properties: a value, and a referece to the next node in the list. The head of the list is basically the fisrt node of it and if the list is empty the head is null.

## Approach & Efficiency

* Any linked list should has a head, and if the linked list is the empty the head should have the null value.
* When inserting to the head of the linked list, the new node should become the head of the list and the will point to the previous head of the list which will become the second node of the list.
* The last node of the list can be called tail and it should point to null.
* Traversing inside the linked list can be done by checking if the current node is pointing to another node or null; if it points to another node the traversing continues, if it points to null, that means this is the last node (tail) in the linked list.

## API

### `insert()`

The `insert()` method adds a new node to begining of the list, which makes it the new head of the list.

### `includes()`

The `includes()` checks if a value existis in the list; if it exists the it returns `true`, if not, it returns `false`;

### `toString()`

The `toString()` method makes a strign shape of the linked list as follows:

`{ value } -> { value} -> ..... -> NULL`.

Example: A linked list has values 3, 4, Hi, 5 and Welcome respectively, the value of using `toString()` method is:

`{ 3 } -> { 4 } -> { Hi } -> { 5 } -> { Welcome } -> NULL`.
