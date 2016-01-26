'use strict';

const forEach = require('../lib/for-each.js');

let fibs = [0, 1, 2, 3, 4, 5, 8];

const logArrayElements = function(element, index, array) {
  console.log('al' + index + '] = ' + element);
};

forEach(fibs, logArrayElements);

fibs.forEach(logArrayElements);

let noElements = new Array(7);

noElements.forEach(logArrayElement);
