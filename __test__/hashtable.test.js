'use strict';

const HashTable = require('../challenges/hashtable/hashtable');

describe('Hashtable Class', () => {
  it('Should successfully insert in the hashtable', async () => {
    const hashTable = new HashTable(1024);
    hashTable.add('cat', 'Candy');
    hashTable.add('act', 'Christian Bale');
    hashTable.add('name', 'Husam');
    hashTable.add('act', 'Husam');
    hashTable.add('city', 'Aqaba');
    hashTable.add('name', 'Hanaa');
    expect(hashTable.get('act')).toEqual('Christian Bale');
  });

    it('Should successfully get a value stored in the hashtable', () => {
        const hashTable = new HashTable(1024);
        hashTable.add('cat', 'Candy');
        hashTable.add('act', 'Christian Bale');
        hashTable.add('name', 'Husam');
        hashTable.add('act', 'Husam');
        hashTable.add('city', 'Aqaba');
        hashTable.add('name', 'Hanaa');
      expect(hashTable.get('cat')).toEqual('Candy');
    });

    it('Should successfully check if a valeu is contained in the hashtable', () => {
        const hashTable = new HashTable(1024);
        hashTable.add('cat', 'Candy');
        hashTable.add('act', 'Christian Bale');
        hashTable.add('name', 'Husam');
        hashTable.add('act', 'Husam');
        hashTable.add('city', 'Aqaba');
        hashTable.add('name', 'Hanaa');
      expect(hashTable.contains('name')).toBeTruthy();
    });
});
