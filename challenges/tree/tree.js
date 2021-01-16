'use strict';

const node = require('./node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    let result = [];
    let _traverse = (node) => {
      result.push(node.value);
      if (node.left) {
        _traverse(node.left);
      }
      if (node.right) {
        _traverse(node.right);
      }
    };
    _traverse(this.root);
    return result;
  }
  inOrder() {
    let result = [];
    let _traverse = (node) => {
      if (node.left) {
        _traverse(node.left);
      }
      result.push(node.value);

      if (node.right) {
        _traverse(node.right);
      }
    };
    _traverse(this.root);
    return result;
  }
  postOrder() {
    let result = [];
    let _traverse = (node) => {
      if (node.left) {
        _traverse(node.left);
      }
      if (node.right) {
        _traverse(node.right);
      }
      result.push(node.value);
    };
    _traverse(this.root);
    return result;
  }
}

module.exports = BinaryTree;