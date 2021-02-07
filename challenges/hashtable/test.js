const HashTable = require('./hashtable');

const hashTable = new HashTable(1024);
hashTable.add('cat', 'Candy');
hashTable.add('act', 'Christian Bale');
hashTable.add('name', 'Husam');
hashTable.add('act', 'Husam');
hashTable.add('city', 'Aqaba');
hashTable.add('name', 'Hanaa');
console.log(hashTable.get('act'));
console.log(hashTable.get('cat'));
console.log(hashTable.contains('name'));
