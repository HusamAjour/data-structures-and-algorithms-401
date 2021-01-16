'use strict';

const bst = require('../challenges/tree/binary-search-tree');

describe('Binary Seach Tree Class', () => {
  it('1. Should successfully instantiate an empty tree', () => {
    let b = new bst();
    expect(b.root).toEqual(null);
  });

  it('2. Should successfully instantiate a tree with a single root node', () => {
    let b = new bst(20);
    expect(b.root).toEqual(20);
  });

  it('3. Should successfully add a left child and right child to a single root node', () => {
    let b = new bst(20);
    b.add(10).add(30);
    expect(b.root).toEqual(20);
    expect(b.root.left).toEqual(10);
    expect(b.root.left).toEqual(30);
  });

  it('4. Should successfully return a collection from a preorder traversal', () => {
    let bst = new BinarySearchTree();
    bst.add(20).add(10).add(16).add(30).add(5).add(25).add(60);
    expect(b.preOrder()).toEqual([20, 10, 5, 16, 30, 25, 60]);
  });

  it('5. Should successfully return a collection from an inorder traversal', () => {
    let bst = new BinarySearchTree();
    bst.add(20).add(10).add(16).add(30).add(5).add(25).add(60);
    expect(b.preOrder()).toEqual([5, 10, 16, 20, 25, 30, 60]);
  });

  it('6. Should successfully return a collection from a postorder traversal', () => {
    let bst = new BinarySearchTree();
    bst.add(20).add(10).add(16).add(30).add(5).add(25).add(60);
    expect(b.preOrder()).toEqual([5, 16, 10, 25, 60, 30, 20]);
  });
});
