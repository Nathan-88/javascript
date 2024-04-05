#!/usr/bin/node
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Destructuring assignment to assign variable from objects
const { today: high1Today, tomorrow: high1Tomorrow } = HIGH_TEMPERATURES;

console.log(high1Today); // 77
console.log(high1Tomorrow); // 80

// Destructuring assignment 
const { today, tomorrow } = HIGH_TEMPERATURES;

console.log(today); // 77
console.log(tomorrow); // 80

// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: {low: lowToday, high: highToday} } = LOCAL_FORECAST;

console.log(lowToday); // 64
console.log(highToday); // 77

// Use Destructuring Assignment to Assign Variables from Arrays
const [s, t] = [1, 2, 3, 4, 5, 6];
console.log(s, t); // 1, 2

let a = 8, b = 6;
// Only change code below this line
[b, a] = [a, b];
console.log(a, b); // 6, 8

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
function removeFirstTwo(list) {
  const [,,...lis] = list;
  return lis;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo); // [3,4,5,6,7,8,9,10]