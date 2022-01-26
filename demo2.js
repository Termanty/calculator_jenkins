'use strict';

console.log(2/0);
console.log(0/0);
console.log(-4/0);
console.log((-4/0)===Number.NEGATIVE_INFINITY); //true
console.log((2/0) === Number.NEGATIVE_INFINITY); //false
console.log(Number.NEGATIVE_INFINITY / Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY / Number.NEGATIVE_INFINITY);