'use strict';

let multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('Multi-bracket Validation Module', () => {
  it('1. Should return false for odd number of brackets', () => {
    let checkBrackets = multiBracketValidation('{');
    let checkBrackets2 = multiBracketValidation('{){');
    let checkBrackets3 = multiBracketValidation('{){)');

    expect(checkBrackets).toBeFalsy();
    expect(checkBrackets2).toBeFalsy();
    expect(checkBrackets3).toBeFalsy();

  });

  it('2. Should work even if there is a text other than brackets in the string', () => {
    let checkBrackets = multiBracketValidation('()[[Extra Characters]]');
    let checkBrackets2 = multiBracketValidation('{}{Code}[Fellows](())');

    expect(checkBrackets).toBeTruthy();
    expect(checkBrackets2).toBeTruthy();
  });

  it('3. Should work for openning followed by a closing directly', () => {
    let checkBrackets = multiBracketValidation('()[]{}');
    let checkBrackets2 = multiBracketValidation('(){}');

    expect(checkBrackets).toBeTruthy();
    expect(checkBrackets2).toBeTruthy();
  });

  it('4. Should work for nested brackets', () => {
    let checkBrackets = multiBracketValidation('[[({})]]');
    let checkBrackets2 = multiBracketValidation('{({[(Hello World)]})}');

    expect(checkBrackets).toBeTruthy();
    expect(checkBrackets2).toBeTruthy();
  });

  it('. Should work for a combination of nested brackets and opening followed by closing', () => {
    let checkBrackets = multiBracketValidation('(){}[[({})]]');
    let checkBrackets2 = multiBracketValidation('()[]{({[(Hello World)]})}[]()');

    expect(checkBrackets).toBeTruthy();
    expect(checkBrackets2).toBeTruthy();
  });
});
