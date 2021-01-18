'use strict';

const node = require('./node');
const tree = require('./tree');

class BinarySearchTree extends tree {
  constructor(root) {
    if (root) super(root);
    else super();
  }
  add(value) {
    let newNode = new node(value, null, null);
    let _insert = (startingNode, newNode) => {
      if (newNode.value < startingNode.value) {
        if (startingNode.left === null) startingNode.left = newNode;
        else _insert(startingNode.left, newNode);
      } else {
        if (startingNode.right === null) startingNode.right = newNode;
        else _insert(startingNode.right, newNode);
      }
    };

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      _insert(this.root, newNode);
      return this;
    }
  }
  contains(value) {
    if (this.root === null) return false;
    let _search = (startingNode, value) => {
      if (!startingNode) return false;
      if (value < startingNode.value) return _search(startingNode.left, value);
      else if (value > startingNode.value)
        return _search(startingNode.right, value);
      else return true;
    };
    return _search(this.root, value);
  }
}
let bst = new BinarySearchTree();
console.log(bst.root);

bst.add(20).add(10).add(16).add(30).add(5).add(25).add(60);
console.log(bst.breadthFirst());

/*console.log(bst.preOrder());
console.log(bst.inOrder());
console.log(bst.postOrder());
console.log(bst.contains(5));
console.log(bst.contains(70));
*/
module.exports = BinarySearchTree;

/*let bst = new BinarySearchTree();
console.log(bst.root);

console.log(bst.add(20));
console.log(bst.add(10));
console.log(bst.add(16));
console.log(bst.add(30));
console.log(bst.add(5));
console.log(bst.add(25));
console.log(bst.add(60));


console.log(bst.preOrder());
console.log(bst.inOrder());
console.log(bst.postOrder());
console.log(bst.contains(5));
console.log(bst.contains(70));

*/
