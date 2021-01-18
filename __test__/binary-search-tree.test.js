'use strict';

const bst = require('../challenges/tree/binary-search-tree');

describe('Binary Seach Tree Class', () => {
  it('1. Should successfully instantiate an empty tree', () => {
    let b = new bst();
    expect(b.root).toEqual(null);
  });

  it('2. Should successfully instantiate a tree with a single root node', () => {
    let b = new bst(20);
    expect(b.root.value).toEqual(20);
  });

  it('3. Should successfully add a left child and right child to a single root node', () => {
    let b = new bst(20);
    b.add(10).add(30);
    expect(b.root.value).toEqual(20);
    expect(b.root.left.value).toEqual(10);
    expect(b.root.right.value).toEqual(30);
  });

  it('4. Should successfully return a collection from a preorder traversal', () => {
    let b = new bst();
    b.add(20).add(10).add(16).add(30).add(5).add(25).add(60);
    expect(b.preOrder()).toEqual([20, 10, 5, 16, 30, 25, 60]);
  });

  it('5. Should successfully return a collection from an inorder traversal', () => {
    let b = new bst();
    b.add(20).add(10).add(16).add(30).add(5).add(25).add(60);
    expect(b.inOrder()).toEqual([5, 10, 16, 20, 25, 30, 60]);
  });

  it('6. Should successfully return a collection from a postorder traversal', () => {
    let b = new bst();
    b.add(20).add(10).add(16).add(30).add(5).add(25).add(60);
    expect(b.postOrder()).toEqual([5, 16, 10, 25, 60, 30, 20]);
  });
  it('7. Should successfully find the maximum value in a tree', () => {
    let b = new bst();
    b.add(20).add(10).add(16).add(30).add(5).add(25).add(60);
    expect(b.findMaximumValue()).toEqual(60);
  });
  it('8. Should successfully return null as the maximum value in a tree if the tree is empty', () => {
    let b = new bst();
    expect(b.findMaximumValue()).toEqual(null);
  });
  it('9. Should successfully return a collection from a breadth first traversal', () => {
    let b = new bst();
    b.add(20).add(10).add(16).add(30).add(5).add(25).add(60);
    expect(b.breadthFirst()).toEqual([20, 10, 30, 5, 16, 25, 60]);
  });
});
