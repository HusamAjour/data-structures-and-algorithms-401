'use strict';
const stack = require('../stacksAndQueues/stack');
const multiBracketValidation = (input) => {
  let brackets = ['(', ')', '[', ']', '{', '}'];
  let splitStr = input.split('');

  let stack1 = new stack();
  let stack2 = new stack();

  let count = 0;
  splitStr.forEach((val) => {
    if (brackets.includes(val)) {
      if (stack1.top) {
        if (stack1.top.value === '(') {
          if (val !== ')') {
            stack1.push(val);
            count++;
          } else {
            stack1.pop();
            count--;
          }
        } else if (stack1.top.value === '[') {
          if (val !== ']') {
            stack1.push(val);
            count++;
          } else {
            stack1.pop();
            count--;
          }
        } else if (stack1.top.value === '{') {
          if (val !== '}') {
            stack1.push(val);
            count++;
          } else {
            stack1.pop();
            count--;
          }
        }
      } else {
        stack1.push(val);
        count++;
      }
    }
  });
  if (count % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < count / 2; i++) {
    stack2.push(stack1.pop());
  }
  while (stack1.top) {
    console.log('inside while');
    console.log(stack1.top.value);
    let stack1Top = stack1.pop();
    let stack2Top = stack2.pop();
    if (stack1Top === '(') {
      if (stack2Top !== ')') {
        return false;
      }
    } else if (stack1Top === '[') {
      if (stack2Top !== ']') {
        return false;
      }
    } else if (stack1Top === '{') {
      if (stack2Top !== '}') {
        return false;
      }
    }
  }

  return true;
};
let x1 = multiBracketValidation('{)[}');
console.log(`x1: ${x1}`);

module.exports = multiBracketValidation;

/*
let x1 = multiBracketValidation('{}');
let x2 = multiBracketValidation('()[[Extra Characters]]');
let x3 = multiBracketValidation('{}(){}');
let x4 = multiBracketValidation('(){}[[]]');
let x5 = multiBracketValidation('{}{Code}[Fellows](())');
let x6 = multiBracketValidation('[({}]');
let x7 = multiBracketValidation('(](');
let x8 = multiBracketValidation('{(})');
let x9 = multiBracketValidation('{');
let x10 = multiBracketValidation(')');
let x11 = multiBracketValidation('[}');

console.log(`x1: ${x1}`);
console.log(`x2: ${x2}`);
console.log(`x3: ${x3}`);
console.log(`x4: ${x4}`);
console.log(`x5: ${x5}`);
console.log(`x6: ${x6}`);
console.log(`x7: ${x7}`);
console.log(`x8: ${x8}`);
console.log(`x9: ${x9}`);
console.log(`x10: ${x10}`);
console.log(`x11: ${x11}`);
*/
