'use strict';

const HashTable = require('../hashtable/hashtable');

const firstRepeatedWord = (str) => {
  if (str.length < 2) return false;
  let hashTable = new HashTable(1024);
  let removePunc = str.replace(/[,./\'\"]/g, '').toLowerCase();
  let words = removePunc.split(' ');
  if (words.length < 2) return false;
  for (let i = 0; i < words.length; i++) {
    if (!hashTable.contains(words[i])) {
      hashTable.add(words[i], 1);
    } else {
      hashTable.add(words[i], hashTable.get(words[i]) + 1);
      if (hashTable.get(words[i]) === 2) {
        return words[i];
      }
    }
  }
  return false;
};

module.exports = firstRepeatedWord;
