'use strict';

const Node = require('../challenges/fizzBuzzTree/node');
const Tree = require('../challenges/fizzBuzzTree/tree');
const fizzBuzzTree = require('../challenges/fizzBuzzTree/fizz-buzz-tree');

describe('Fizz Buzz Tree Module', () => {
  it('Should successfully instantiate an empty tree', () => {
    const abe = new Node(3);
    const homer = new Node(10);
    const bart = new Node(5);
    const lisa = new Node(15);
    const maggie = new Node(30);
    abe.children.push(homer);
    homer.children.push(bart, lisa, maggie);
    let tr = new Tree(abe);
    let x = fizzBuzzTree(tr);
    expect(x.root.value).toEqual('Fizz');
    expect(x.root.children[0].value).toEqual('Buzz');
    expect(x.root.children[0].children[0].value).toEqual('Buzz');
    expect(x.root.children[0].children[1].value).toEqual('FizzBuzz');
    expect(x.root.children[0].children[2].value).toEqual('FizzBuzz');
  });
});
