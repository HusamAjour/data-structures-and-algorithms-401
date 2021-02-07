'use strict';

const firstRepeatedWord = require('../challenges/repeatedWord/repeated-word');

describe('Repeated Word Module', () => {
  it('Should successfully return the first word to occur twice', async () => {
    expect(firstRepeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...')).toEqual('summer');
  });

  it('Should successfully return false if string is less than 2 characters', async () => {
    expect(firstRepeatedWord('a')).toBeFalsy();
  });

  it('Should successfully return false if string has less than 2 words', async () => {
    expect(firstRepeatedWord('hello')).toBeFalsy();
  });

  it('Should successfully return false if there is no word repeatd more than one', async () => {
    expect(firstRepeatedWord('hello this is husam')).toBeFalsy();
  });
});
