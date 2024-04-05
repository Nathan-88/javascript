#!/usr/bin/node
// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

function convertToInteger(str) {
  const a = parseInt(str, 2)
  return a
}

console.log(convertToInteger("10011"));