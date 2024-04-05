#!/usr/bin/node
// “this” in methods
// It’s common that an object method needs to access the information stored in the object to do its job.
// To access the object, a method can use the 'this' keyword.

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  }
};

user.sayHi(); // John


// Technically, it’s also possible to access the object without this, by referencing it via the outer variable:

let user1 = {
  name: "John",
  age: 30,

  sayHi() {
    console.log(user1.name); // "user" instead of "this"
  }
};

// …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.