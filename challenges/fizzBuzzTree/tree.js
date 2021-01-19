'use strict';

const node = require('./node');
const queue = require('../stacksAndQueues/queue');
class Tree {
  constructor(val) {
    if (val) {
      this.root = val;
    } else {
      this.root = null;
    }
  }
}

module.exports = Tree;
