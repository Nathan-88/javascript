// Functions are a fundamental concept in JavaScript that allow you to group together a block of code that can be called and executed multiple times. In JavaScript, functions are treated as first-class objects, which means they can be passed around and manipulated just like any other value.

/*Function Declaration: Functions can be declared using the function keyword, followed by the function name, and then a set of parentheses containing any parameters the function may take, and finally a set of curly braces enclosing the function's code.
*/
// function add(x, y) {
//   return x + y;
// }

/* Function Expression: Functions can also be created using a function expression, which involves assigning a function to a variable.
*/
// const add = function(x, y) {
//   return x + y;
// };

/*
Default Parameters: Functions can also have default parameter values that are used if no argument is provided for that parameter.
*/ 
function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, World!
greet('John'); // Output: Hello, John!

/*

*/ 
let greet1 = x => console.log(x);
greet1('Hello'); // Hello

let age = 20;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby