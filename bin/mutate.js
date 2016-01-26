'use strict';

const mutate = require('../lib/mutate.js');

let initial = [2, 4, 6];
let complete = mutate(initial, function(e) {
  return e * 2;
});

console.log('initial:', initial);
console.log('complete:', complete);
