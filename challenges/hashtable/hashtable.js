'use strict';
const linkedList = require('./linked-list');

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return (sumCharCode * 19) % this.size;
  }

  add(key, value) {
    let hash = this.hash(key);

    if (!this.table[hash]) {
      this.table[hash] = new linkedList();
    }

    let current = this.table[hash].head;
    while (current) {
      if (current.value[key]) {
        current.value[key] = value;
        return;
      }
      current = current.next;
    }

    const entry = { [key]: value };
    this.table[hash].append(entry);
  }

  get(key) {
    let hash = this.hash(key);

    if (!this.table[hash]) return false;
    let current = this.table[hash].head;
    while (current) {
      if (current.value[key]) {
        return current.value[key];
      }
      current = current.next;
    }

    return false;
  }

  contains(key) {
    let hash = this.hash(key);

    if (!this.table[hash]) return false;
    let current = this.table[hash].head;
    while (current) {
      if (current.value[key]) {
        return true;
      }
      current = current.next;
    }

    return false;
  }
}
// const hashTable = new HashTable(1024);
// hashTable.add('cat', 'Candy');
// hashTable.add('act', 'Christian Bale');
// hashTable.add('name', 'Husam');
// hashTable.add('act', 'Husam');
// hashTable.add('city', 'Aqaba');
// hashTable.add('name', 'Hanaa');
// console.log(hashTable.get('act'));
// console.log(hashTable.get('city'));
// console.log(hashTable.contains('name'));

module.exports = HashTable;
