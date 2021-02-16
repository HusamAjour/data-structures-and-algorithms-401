'use strict';

const node = require('./node');
const queue = require('../stacksAndQueues/queue');
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
  breadthFirst() {
    if (!this.root) {
      return null;
    }
    let q = new queue();
    let result = [];
    q.enqueue(this.root);

    while (!q.isEmpty()) {
      let current = q.dequeue();
      if(current.left) q.enqueue(current.left);
      if(current.left) q.enqueue(current.right);
      result.push(current.value);
      console.log(current);
    }
    // const _traverse = (startingNode) => {
    //   let q = new queue();
    //   q.enqueue(startingNode);
    //   while (q.front) {
    //     let current = q.front.value;
    //     if (current.left) q.enqueue(current.left);
    //     if (current.right) q.enqueue(current.right);
    //     result.push(q.dequeue().value);
    //     current = q.front;
    //   }
    // };
    // _traverse(this.root);
    return result;
  }
}

module.exports = BinaryTree;
