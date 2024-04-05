#!/usr/bin/node
//?.() checks the left part: if the admin function exists, then it runs (that’s so for userAdmin). Otherwise (for userGuest) the evaluation stops without errors.
let userAdmin = {
  admin() {
    console.log("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin
console.log(userAdmin.sayHi?.()); //undefined
userGuest.admin?.(); // nothing happens (no such method)

//The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .. Similar to previous cases, it allows to safely read a property from an object that may not exist.

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

console.log( user1?.[key] ); // John
console.log( user2?.[key] ); // undefined