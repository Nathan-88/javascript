#!/usr/bin/node
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Destructure 'max' and 'min' from the 'stats' object within the function argument
const half = ({ max, min }) => (max + min) / 2.0;

// Call the 'half' function with the 'stats' object
const result = half(stats);

console.log(result); // Output will be (56.78 - 0.75) / 2.0 = 28.015