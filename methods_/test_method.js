#!/usr/bin/node
/**
 * the .test() method is a built-in method available on
 * regular expression objects. It allows you to check
 * whether a given string matches a specified regular
 * expression pattern. The method returns true if the
 * pattern is found in the string, and false otherwise
 * The syntax for using the .test() method is as follows:
 * 
 * regex.test(string)
 * Here, regex is the regular expression pattern, and string is the string you want to test against the pattern.

 */

const string = "I love eating apples.";
const regex = /apple/;

const result = regex.test(string);
console.log(result);
