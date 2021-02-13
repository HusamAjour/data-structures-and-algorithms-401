'use strict';

const Vertex = require('./vertex');
const Edge = require('./edge');

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addNode(vertex) {
    this._adjacencyList.set(vertex, []);
    return this._adjacencyList.get(2);
  }

  addEdge(startVertex, endVertex, weight) {
    if (
      !this._adjacencyList.has(startVertex) ||
      !this._adjacencyList.has(endVertex)
    ) {
      console.log('NOT FOUND!');
      return;
    }

    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNodes() {
    let keys = this._adjacencyList.keys();
    let nodes = [];
    while(true){
        let key = keys.next().value;
        if(key){
            nodes.push(key.value);
        } else{
            break;
        }
    }
    return nodes;
  }

  getNeighbours(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      console.log('NOT FOUND!');
      return;
    }
    return this._adjacencyList.get(vertex);
  }

  size(){
    return this._adjacencyList.size;
  }
}
// let g = new Graph();

// const two = new Vertex(2);
// const three = new Vertex(3);
// const six = new Vertex(6);
// const seven = new Vertex(7);
// const eight = new Vertex(8);

// g.addNode(two);
// g.addNode(three);
// g.addNode(six);
// g.addNode(seven);
// g.addNode(eight);

// g.addEdge(two, six);
// g.addEdge(two, three);
// g.addEdge(three, seven);
// g.addEdge(eight, two);
// g.addEdge(three, six);

// console.log(g.getNodes());

module.exports = Graph;
