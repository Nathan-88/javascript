#!/usr/bin/node
/**
 * ES6 introduces the rest parameter for function parameters. With the rest parameter, you can
 * create functions that take a variable number of arguments. These arguments are stored in an
 * array that can be accessed later from inside the function.
 */

// How to use the rest parameter with function parameters
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a); // a, one
    console.log("b", b); // b, two
    console.log("manyMoreArgs", manyMoreArgs); // manyMoreArgs, [three, four, five, six]
    }
myFun("one", "two", "three", "four", "five", "six");


// Example 2
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));


