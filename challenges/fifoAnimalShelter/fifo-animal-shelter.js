'use strict';

const Stack = require('../stacksAndQueues/stack');

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(animal) {
    if (/^dog|^cat/i.test(animal)) {
      if (!this.front) {
        this.stack1.push(animal);
        this.front = this.stack1.top;
      } else {
        this.stack1.push(animal);
      }
    } else {
      return false;
    }
  }

  dequeue(pref) {
    if (!this.stack1.top) {
      console.log('Shelter is empty!');
      return null;
    } else {
      if (/^dog|^cat/i.test(pref)) {
        while (this.stack1.top) {
          this.stack2.push(this.stack1.pop());
        }
        let i = 0;
        let remvovedVal = null;
        let newVar = this.stack2.pop();
        console.log(`i = ${++i}`);
        if (newVar === pref) {
          this.front = this.stack2.top;
          remvovedVal = newVar;
        } else {
          this.stack1.push(newVar);
        }

        while (this.stack2.top) {
          console.log(`i = ${++i}`);
          if (remvovedVal === null) {
            if (this.stack2.top.value === pref) {
              remvovedVal = this.stack2.pop();
            }
          }
          this.stack1.push(this.stack2.pop());
        }
        return remvovedVal;
      } else {
        console.log('Shelter hasonly cats and dogs!');
        return null;
      }
    }
  }
}

let pseQ = new AnimalShelter();

pseQ.enqueue('cat1');
pseQ.enqueue('cat2');
pseQ.enqueue('dog1');
pseQ.enqueue('dog2');
pseQ.enqueue('cat3');

console.log(pseQ.dequeue('cat3'));
console.log(pseQ.dequeue('cat1'));
console.log(pseQ.dequeue('dog2'));
console.log(pseQ.dequeue('cat2'));
console.log(pseQ.dequeue('dog1'));

console.log(pseQ);

//console.log(pseQ.dequeue());
/*console.log(pseQ.dequeue());
console.log(pseQ.dequeue());
console.log(pseQ.dequeue());
console.log(pseQ.dequeue());
console.log(pseQ.dequeue());/*

while (pseQ.front) {
  console.log(pseQ.front);
  console.log(pseQ.dequeue());
}
module.exports = AnimalShelter;
*/

/*if (/^dog|^cat/i.test(pref)) {
      if (!this.stack1.top) {
        console.log('Shelter is empty!');
        return null;
      } else {
        
        let i = 0;
        let remvovedVal = null;
        while (this.stack2.top) {
          if (!remvovedVal) {
            console.log(`itteration: ${++i}`);
            console.log(`top1: ${this.stack1.top}`);
            console.log(`top2: ${this.stack2.top.value}`);
            console.log(`front: ${this.front.value}`);
            if (!this.stack1.top) {
              if (this.stack2.top.value === pref) {
                this.front = this.stack2.top;
              }
            } else if (this.stack2.top.value === pref) {
              remvovedVal = this.stack2.pop();
              this.front = this.stack2.top;
            }else (this.stack2.top.value === pref) {
              remvovedVal = this.stack2.pop();
            }
          }
          this.stack1.push(this.stack2.pop());
        }
        return remvovedVal;
      }
    } else {
      return null;
    }
  }*/
