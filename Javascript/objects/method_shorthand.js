#!/usr/bin/node
// these objects do the same
user = {
  sayHi: function() {
    console.log("Hello");
  }
};

// method shorthand looks better, right?
user1 = {
  sayHi() {
    console.log("Hello");
  }  // same as "sayHi: function(){...}"
};

user.sayHi()
console.log(Object.is(user, user1))
// As demonstrated, we can omit "function" and just write sayHi().