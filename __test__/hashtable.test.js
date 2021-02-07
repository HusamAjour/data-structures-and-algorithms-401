'use strict';

const HashTable = require('../challenges/hashtable/hashtable');

describe('Hashtable Class', () => {
  it('Should successfully insert multiple in the hashtable', async () => {
    const hashTable = new HashTable(1024);
    hashTable.add('cat', 'Candy');
    hashTable.add('act', 'Christian Bale');
    hashTable.add('name', 'Husam');
    expect(hashTable.get('cat')).toEqual('Candy');
    expect(hashTable.get('name')).toEqual('Husam');
    expect(hashTable.get('act')).toEqual('Christian Bale');
  });

  it('Should successfully get a value stored in the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('cat', 'Candy');
    hashTable.add('act', 'Christian Bale');
    hashTable.add('name', 'Husam');
    expect(hashTable.get('name')).toEqual('Husam');
  });

  it('Should successfully return false if a value isnt stored in the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('cat', 'Candy');
    hashTable.add('act', 'Christian Bale');
    hashTable.add('name', 'Husam');
    expect(hashTable.get('blabla')).toBeFalsy;
  });
  it('Should successfully retrun true if a valeu is contained in the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('cat', 'Candy');
    hashTable.add('act', 'Christian Bale');
    expect(hashTable.contains('act')).toBeTruthy();
  });
  it('Should successfully return false if a valeu is not contained in the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('cat', 'Candy');
    hashTable.add('act', 'Christian Bale');
    expect(hashTable.contains('name')).toBeFalsy();
  });
});
