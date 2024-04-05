#!/usr/bin/node

// Create an object
let myObject = {
  name: "John",
  age: 30,
};

// Check if the object has a specific property
let hasNameProperty = myObject.hasOwnProperty("name");
let hasGenderProperty = myObject.hasOwnProperty("gender");

console.log(hasNameProperty); // true
console.log(hasGenderProperty); // false