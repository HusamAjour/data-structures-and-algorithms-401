'use strict';

const node = require('./node');

class BinaryTree {
  constructor(val) {
    if (val) {
      this.root = new node(val, null, null);
    } else {
      this.root = null;
    }
  }
  findMaximumValue() {
    if (!this.root) return null;
    let maxVal = 0;

    let _findMax = (startNode) => {
      if (startNode.value > maxVal) {
        maxVal = startNode.value;
      }

      if (startNode.left) {
        _findMax(startNode.left);
      }
      if (startNode.right) {
        _findMax(startNode.right);
      }
    };
    _findMax(this.root);
    return maxVal;
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
