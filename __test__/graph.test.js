'use strict';

const Edge = require('../challenges/graph/edge');
const Vertex = require('../challenges/graph/vertex');
const Graph = require('../challenges/graph/graph');

describe('Graph Class', () => {
  it('Vertex can be successfully added to the graph', () => {
    let g = new Graph();
    const two = new Vertex(2);
    g.addNode(two);
    expect(g.getNeighbours(two)).toEqual([]);
  });

  it('An edge can be successfully added to the graph', () => {
    let g = new Graph();
    const two = new Vertex(2);
    const three = new Vertex(3);
    const six = new Vertex(6);
    g.addNode(three);
    g.addNode(six);
    g.addNode(two);
    g.addEdge(two, six);
    g.addEdge(two, three);

    let x = g.getNeighbours(two).map(edge=>{
        return edge.vertex.value;
    });

    expect(x).toEqual([6,3]);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
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
    
    console.log(g.getNodes());
    expect(g.getNodes()).toEqual([2,3,6,7,8]);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    let g = new Graph();
    const two = new Vertex(2);
    const three = new Vertex(3);
    const six = new Vertex(6);
    const seven = new Vertex(7);
    const eight = new Vertex(8);
    g.addNode(seven);
    g.addNode(eight);
    g.addNode(three);
    g.addNode(six);
    g.addNode(two);
    g.addEdge(two, six);
    g.addEdge(two, three);
    g.addEdge(six, seven);
    g.addEdge(three, eight);

    let x = g.getNeighbours(two).map(edge=>{
        return edge.vertex.value;
    });

    expect(x).toEqual([6,3]);
  });
});
