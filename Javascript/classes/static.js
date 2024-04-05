#!/usr/bin/node

class Calculator {
  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }
}

console.log(Calculator.add(5, 3));      // Output: 8
console.log(Calculator.subtract(7, 2)); // Output: 5