#!/usr/bin/node
// Path: string-methods.js

// String Methods

// String Length
const str = 'Hello World';
console.log(str.length);

// String Concatenation
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ',str2));

// String Slicing
const str3 = 'Hello World';
console.log(str3.slice(-5));

//Substring
const strr3 = 'Hello World';
console.log(strr3.substring(0, 5));

// String Splitting
const str4 = 'Hello, World';
console.log(str4.split(', '));

// String Replacing
const str5 = 'Hello World';
console.log(str5.replace('Hello', 'Hi'));

// String Searching
const str6 = 'Hello World';
console.log(str6.search('World'));

// indexof
const str7 = 'Hello World';
console.log(str7.indexOf('o'));

//lastIndexOf
const str8 = 'Hello World';
console.log(str8.lastIndexOf('o'));

//toUppercase
const str9 = 'Hello World';
console.log(str9.toUpperCase());

//toLowercase
const str10 = 'Hello World';
console.log(str10.toLowerCase());

//Repeat method
const str11 = 'Hello World';
console.log(str11.repeat(3));

//trim method
const str12 = ' Hello World   ';
console.log(str12.trim());

//trimStart method
const str13 = ' Hello World';
console.log(str13.trimStart());

//trimEnd method
