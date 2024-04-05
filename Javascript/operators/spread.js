#!/usr/bin/node

/**
 * The spread operator (...) in JavaScript is a versatile feature that allows you to expand
 * elements from one array or object into another. It is commonly used for creating new arrays
 * objects, shallow copying, and merging arrays/objects. Here are some examples to illustrate its
 * usage:
 */

// combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// copying arrays
const arr = [1, 2, 3];
const arrCopy = [...arr];
console.log('original', arr)      // original [1, 2, 3]

arrCopy.push(4);
console.log('copy', arrCopy)      // copy [1, 2, 3, 4]

// merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
let mergedObj = {...obj1};       // create an empty object with the same properties as `obj` (shallow copy).
mergedObj = {...obj1, ...obj2}; // merge the properties of `obj` and `obj2` into `mergedObj`.
console.log("Merged Object", mergedObj);// Merged Object {a: 1, b: 2, c: 3, d


// destructuring arrays
const arr3 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr3;
console.log(first, second, rest); // 1 2 [3, 4, 5]

// destructuring objects
const obj3 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const { a, b, ...restObj } = obj3;
console.log(a, b, restObj); // 1 2 {c: 3, d: 4, e: 5}

// passing arguments to functions
const arr4 = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => a + b + c + d + e;
console.log(sum(...arr4)); // 15

// How to use the rest parameter with destructuring
const [c, d, ...crr] = [1, 2, 3, 4, 5, 7];
console.log(c, d); // 1, 2
console.log(crr); // [3, 4, 5, 7]

// appending values to an arraying using the spread operator
const rray = ["joy","Amaka","peace"]
const newrray = () => [...rray, "love", "Favor"];
console.log(newrray())



console.log(rray.slice(0, -1))