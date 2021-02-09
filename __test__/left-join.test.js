'use strict';

const HashTable = require('../challenges/hashtable/hashtable');
const leftJoin = require('../challenges/leftJoin/left-join');

describe('Hashtable Class', () => {
  it('Should return the for all the keys in the left hashmap their value and null if the same key doesnt exist in the right hashmap', async () => {
    const hashTable1 = new HashTable(1024);
    hashTable1.add('cat', 'Candy');

    const hashTable2 = new HashTable(1024);
    hashTable2.add('game', 'Cinnamon');

    expect(leftJoin(hashTable1, hashTable2)).toEqual([['cat', 'Candy', null]]);
  });

  it('Should return both values from both the left and right hashmaps if both have the same key', () => {
    const hashTable1 = new HashTable(1024);
    hashTable1.add('cat', 'Candy');
    hashTable1.add('act', 'Christian Bale');

    const hashTable2 = new HashTable(1024);
    hashTable2.add('cat', 'Cinnamon');
    hashTable2.add('act', 'Steve Carell');

    hashTable2.add('name', 'Husam');

    expect(leftJoin(hashTable1, hashTable2)).toEqual([
      ['cat', 'Candy', 'Cinnamon'],
      ['act', 'Christian Bale', 'Steve Carell'],
    ]);
  });
});
