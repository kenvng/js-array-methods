'use strict';

var forEach = function forEach(array, callback) {
  // callback(currentValue, index, array)
for (let i = 0; i < array.length; i++)

//callback is invoked with three arguments:
//the element value
//the element index
//the array being traversed
  callback(array[i], i, array);
};

module.exports = forEach;
