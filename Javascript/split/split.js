#!/usr/bin/node
const text = "Apple, Banana, Cherry, Date";
const delimiter = /[,\s]+/; // Matches one or more commas or spaces

const fruits = text.split(delimiter);

console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]