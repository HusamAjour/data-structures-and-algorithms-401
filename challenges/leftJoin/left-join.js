'use strict';
let HashTable = require('../hashtable/hashtable');

const leftJoin = (hashmap1, hashmap2) => {
  let arr = [];
  for (let i = 0; i < hashmap1.table.length; i++) {
    if (hashmap1.table[i]) {
      let current = hashmap1.table[i].head;
      while (current) {
        let innerArr = [];
        innerArr.push(Object.keys(current.value)[0]);
        innerArr.push(hashmap1.get(Object.keys(current.value)[0]));
        if (hashmap2.contains(Object.keys(current.value)[0])) {
          innerArr.push(hashmap2.get(Object.keys(current.value)[0]));
        } else {
          innerArr.push(null);
        }
        arr.push(innerArr);
        current = current.next;
      }
    }
  }  return arr;
};

const hashTable1 = new HashTable(1024);
hashTable1.add('cat', 'Candy');
hashTable1.add('act', 'Christian Bale');
hashTable1.add('game', 'football');

const hashTable2 = new HashTable(1024);
hashTable2.add('cat', 'Cinnamon');
hashTable2.add('act', 'Steve Carell');

hashTable2.add('name', 'Husam');

leftJoin(hashTable1, hashTable2);

module.exports = leftJoin;
