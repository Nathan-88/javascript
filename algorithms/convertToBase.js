#!/usr/bin/node
/*
function that converts a number from base 10 to another base
passed as an argument
*/

function convertToBase(number, base) {
  if (base < 2 || base > 36) {
    throw new Error('Invalid base. Base must be between 2 and 36.');
  }

  let result = '';

  while (number > 0) {
    const remainder = number % base;
    result = remainder < 10 ? remainder + result : String.fromCharCode(remainder + 55) + result;
    number = Math.floor(number / base);
  }

  return result;
}

const decimalNumber = 42;
const base = 2;
const convertedNumber = convertToBase(decimalNumber, base);
console.log(convertedNumber); // Output: "101010"


// function convertToBase(num, base) {
//     var result = [];
//     while (num > 0) {
//         result.push(num % base);
//         num = Math.floor(num / base);
//     }
//     return result.reverse().join('');
//     }
