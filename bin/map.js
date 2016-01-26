'use strict';

const map = require('../lib/map.js');

let initial = [2, 4, 6];
let complete = map(initial, function(e) {
  return e * 2;
});

console.log('initial:', initial);
console.log('complete:', complete);
