'use strict';

const Vertex = require('./vertex');
const Edge = require('./edge');
const Queue = require('../stacksAndQueues/queue');
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

  getNode(value) {
    let keys = this._adjacencyList.keys();
    while (true) {
      let key = keys.next().value;
      if (key) {
        if (key.value === value) return key;
      } else {
        break;
      }
    }
    return null;
  }

  getNodes() {
    let keys = this._adjacencyList.keys();
    let nodes = [];
    while (true) {
      let key = keys.next().value;
      if (key) {
        nodes.push(key.value);
      } else {
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

  size() {
    return this._adjacencyList.size;
  }

  breadthFirst(vertex) {
    let q = new Queue();
    let values = [];
    q.enqueue(vertex);

    const storeEdges = (v) => {
      console.log('arrr======>', this._adjacencyList.get(v).length);
      for (let i = 0; i < this._adjacencyList.get(v).length; i++) {
        console.log(this._adjacencyList.get(v)[i]);
        q.enqueue(this._adjacencyList.get(v)[i].vertex);
      }
    };

    while (!q.isEmpty()) {
      let v = q.dequeue();
      console.log(v.value);
      storeEdges(v);
      if (!values.includes(v.value)) {
        values.push(v.value);
      }
    }
    return values;
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

// console.log(g.breadthFirst(eight));

module.exports = Graph;
