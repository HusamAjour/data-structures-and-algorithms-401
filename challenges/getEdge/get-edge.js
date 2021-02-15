'use strict';
const Graph = require('../graph/graph');
const Vertex = require('../graph/vertex');

const getEdge = (graph, flightDirections) => {
  let totalCost = 0;
  if(flightDirections.length === 0 || graph.getNodes().length===0){
      console.log('Empty Graph or Array');
      return {isPossible: false, cost: totalCost};
  }

  for (let i = 0; i < flightDirections.length - 1; i++) {
    let ver = graph.getNode(flightDirections[i]);
    let edges = graph.getNeighbours(ver);
    let foundCity = false;
    for (let j = 0; j < edges.length; j++) {
      if (edges[j].vertex.value == flightDirections[i + 1]) {
        totalCost = totalCost + edges[j].weight;
        foundCity = true;
        break;
      }
    }
    if (!foundCity) return { isPossible: false, cost: 0 };
  }
  return { isPossible: true, cost: totalCost };
};

let g = new Graph();

const pandora = new Vertex('Pandora');
const arendelle = new Vertex('Arendelle');
const newMonstropolis = new Vertex('New Monstropolis');
const naboo = new Vertex('Naboo');
const metroville = new Vertex('Metroville');
const narnia = new Vertex('Narnia');

g.addNode(pandora);
g.addNode(arendelle);
g.addNode(newMonstropolis);
g.addNode(naboo);
g.addNode(metroville);
g.addNode(narnia);

g.addEdge(pandora, arendelle, 150);
g.addEdge(pandora, metroville, 82);

g.addEdge(arendelle, pandora, 150);
g.addEdge(arendelle, metroville, 99);
g.addEdge(arendelle, newMonstropolis, 42);

g.addEdge(metroville, pandora, 82);
g.addEdge(metroville, arendelle, 99);
g.addEdge(metroville, newMonstropolis, 105);
g.addEdge(metroville, naboo, 26);
g.addEdge(metroville, narnia, 37);

g.addEdge(newMonstropolis, arendelle, 42);
g.addEdge(newMonstropolis, metroville, 105);
g.addEdge(newMonstropolis, naboo, 73);

g.addEdge(naboo, metroville, 73);
g.addEdge(naboo, newMonstropolis, 26);
g.addEdge(naboo, narnia, 250);

g.addEdge(narnia, naboo, 250);
g.addEdge(narnia, metroville, 37);

console.log(getEdge(g, ['Narnia', 'Arendelle', 'Naboo']));
module.exports = getEdge;
