'use strict';

const getEdge = require('../challenges/getEdge/get-edge');
const Vertex = require('../challenges/graph/vertex');
const Graph = require('../challenges/graph/graph');

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

describe('getEdge Module', () => {
  it('Should return true if there is a path between two cities', () => {
    let { isPossible, cost } = getEdge(g, ['Metroville', 'Pandora']);
    expect(isPossible).toBeTruthy();
    expect(cost).toEqual(82);
  });

  it('Should return true if there is a path between multiple cities', () => {
    let { isPossible, cost } = getEdge(g, [
      'Arendelle',
      'New Monstropolis',
      'Naboo',
    ]);
    expect(isPossible).toBeTruthy();
    expect(cost).toEqual(115);
  });

  it('Should return false if there is no path between two cities', () => {
    let { isPossible, cost } = getEdge(g, ['Naboo', 'Pandora']);
    expect(isPossible).toBeFalsy();
    expect(cost).toEqual(0);
  });

  it('Should return false if there is no path between multiple cities', () => {
    let { isPossible, cost } = getEdge(g, ['Narnia', 'Arendelle', 'Naboo']);
    expect(isPossible).toBeFalsy();
    expect(cost).toEqual(0);
  });

  it('Should return false when the graph is empty', () => {
    let { isPossible, cost } = getEdge(new Graph(), ['Naboo', 'Pandora']);
    expect(isPossible).toBeFalsy();
    expect(cost).toEqual(0);
  });

  it('Should return fasle when the city array is empty', () => {
    let { isPossible, cost } = getEdge(g, []);
    expect(isPossible).toBeFalsy();
    expect(cost).toEqual(0);
  });
});
