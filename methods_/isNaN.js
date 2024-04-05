#!/usr/bin/node
// returns true if the value is not a number
const value1 = 42;
const value2 = 'Hello';
const value3 = NaN;

console.log(isNaN(value1)); // Output: false, value1 is a number
console.log(isNaN(value2)); // Output: true, value2 is not a number
console.log(isNaN(value3)); // Output: true, value3 is NaN
