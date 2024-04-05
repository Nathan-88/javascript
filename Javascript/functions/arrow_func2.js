#!/usr/bin/node
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5])); // → [1, 2, 3, 4, 5]

const sum = (num, value= 1) => {return num+value};// the return is included becaused of the curly braces used

console.log(sum(5, 5)); // → 10
console.log(sum(5)); // → 6