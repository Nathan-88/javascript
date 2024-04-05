#!/usr/bin/node
/**
 * The includes() method is a built-in method of JavaScript's String and Array objects that checks whether a value exists within the string or array. It returns a boolean value (true or false) indicating whether or not the value is found.

The syntax for using includes() is as follows:

For strings:
string.includes(searchValue[, startIndex])
For arrays:
array.includes(searchElement[, fromIndex])
Here's what each parameter means:

searchValue/searchElement: The value to search for.
startIndex/fromIndex (optional): The position in the string/array to begin the search. If this parameter is omitted, the search starts at the beginning of the string/array.
Here's an example of how to use includes() with a string:

const myString = 'Hello, world!';
const searchString = 'world';
const isSubstring = myString.includes(searchString);
console.log(isSubstring); // Output: true

 */
const myArray = [1, 2, 3, 4, 5];
const searchElement = 3;

const arrayIncludesElement = myArray.includes(searchElement);

console.log(arrayIncludesElement); // Output: true
//In this example, we use includes() to check if the searchElement exists in myArray. Since it does, arrayIncludesElement is set to true.
