#!/usr/bin/node
let user = {}; // user has no address
console.log('Street name:' +  user?.address?.street ?? 'Not found');   //'Not Found' - optional chaining operator

let user1 = {}; // user has no address

console.log( user1?.address?.street ); // undefined (no error)

// If there’s no variable user at all, then user?.anything triggers an error:
console.log(user3?.name);  /* SyntaxError */
// ReferenceError: user is not defined
