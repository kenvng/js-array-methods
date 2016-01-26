'use strict';
const mutate = function mutate(array, transform) {
    // call the method on the array
    array.forEach(function(value, index, array) {          // function for callback forEach
      array[index] = transform(value, index, array);
    });
  return array;

};
  module.exports = mutate;


/*
let ken = function(value, index, array) {
  array[index] = transform(value, index, array);
}
array.forEach(ken);
*/
