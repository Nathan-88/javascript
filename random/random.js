#!/usr/bin/node
// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax. in javascript

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var result = randomRange(5, 10);
console.log(result); // output: 7

/**
 * the Math.random() function to generate a random decimal number
 * between 0 and 1. We then multiply it by the difference between
 * myMax and myMin to get a
 * random decimal number within the desired range.
 * 
 * To convert this decimal number into a whole number, we use
 * Math.floor() to round it down to the nearest integer. Finally we add myMin to the result to
 * ensure that the returned number is within the specified range.
 */