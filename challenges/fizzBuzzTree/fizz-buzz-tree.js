'use strict';

const Node = require('./node');
const Tree = require('./tree');

const fizzBuzzTree = (tree) => {
    if(!tree.root) return null;
  let t = new Tree();
  let _traverse = (node) => {
    let n = new Node(null);
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      n.value = 'FizzBuzz';
    } else if (node.value % 3 === 0) {
      n.value = 'Fizz';
    } else if (node.value % 5 === 0) {
      n.value = 'Buzz';
    } else {
      n.value = node.value;
    }
    for (let i = 0; i < node.children.length; i++) {
      n.children.push(_traverse(node.children[i]));
    }
    return n;
  };
  t.root = _traverse(tree.root);
  return t;
};

const abe = new Node(3);
const homer = new Node(10);
const bart = new Node(5);
const lisa = new Node(15);
const maggie = new Node(30);
abe.children.push(homer);
homer.children.push(bart, lisa, maggie);
let tr = new Tree(abe);
let x = fizzBuzzTree(tr);
console.log(x.root);
console.log(x.root.children[0]);
console.log(x.root);
console.log(x.root);

for (let j = 0; j < x.root.children[0].length; j++) {
  console.log(x.root.children[0][j]);
}
module.exports = fizzBuzzTree;
