'use strict';

const Edge = require('../challenges/graph/edge');
const Vertex = require('../challenges/graph/vertex');
const Graph = require('../challenges/graph/graph');

describe('Graph BFS Method', () => {

  it('Should return an array of BFS values', () => {
    let g = new Graph();

    const two = new Vertex(2);
    const three = new Vertex(3);
    const six = new Vertex(6);
    const seven = new Vertex(7);
    const eight = new Vertex(8);
    
    g.addNode(two);
    g.addNode(three);
    g.addNode(six);
    g.addNode(seven);
    g.addNode(eight);
    
    g.addEdge(two, six);
    g.addEdge(two, three);
    g.addEdge(three, seven);
    g.addEdge(eight, two);
    g.addEdge(three, six);
  
    expect(g.breadthFirst(eight)).toEqual([8,2,6,3,7]);
  });
});
