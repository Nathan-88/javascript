#!/usr/bin/node
let user1 = { name: 'John' };

let admin = user1;

admin.name = 'Pete'; // changed by the "admin" reference

console.log(user1.name); // 'Pete', changes are seen from the "user1" reference


// same for arrays:
const arr = ["joy", "manny", "john"];
const arr2 = arr;

arr2[1] = "james";
console.log(arr); // [ 'joy', 'james', 'john' ]

console.log (Object.is(arr, arr2))