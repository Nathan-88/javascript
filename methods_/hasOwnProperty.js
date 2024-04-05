#!/usr/bin/node
/**
 * To check if a property on a given object exists or not,
 * you can use the .hasOwnProperty() method.
 */

function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

console.log(checkForProperty({ top: 'hat', bottom: 'pants' }, 'top')); // true
console.log(checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle')); // false