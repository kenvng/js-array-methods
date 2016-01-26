'use strict';

var map = function map(array, callback) {
  // callback(currentValue, index, array)
  let newArray = new Array(array.length);
  // call the method on the array
  array.forEach(function(e, i, a) { // function for callback forEach
    newArray[i] = callback(e, i, a); // assign element to the newArray[index]
  });
return newArray;
};

module.exports = map;
