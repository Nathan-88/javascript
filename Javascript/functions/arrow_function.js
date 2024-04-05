#!/usr/bin/node

// let sum = (a,b) => a+b;

// console.log(sum(1,4));
/**
 * As you can see, (a, b) => a + b means a function that accepts
 * two arguments named a and b. Upon the execution, it evaluates
 * the expression a + b and returns the result.
 */

//If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

let double = n => n * 2;
console.log(double(3));//6


//If there are no arguments, parentheses should be empty (but they should be present):
let sayHi = () => console.log("Hello!");
sayHi();

// dynamically create a function
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => console.log('Hello') :
    () => console.log("Greetings!");
welcome();//console.log "hello" if user's age less than or equal to 18 else console.log greeting!

//Multiline arrow functions
let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};
console.log(sum(50, -7));

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);