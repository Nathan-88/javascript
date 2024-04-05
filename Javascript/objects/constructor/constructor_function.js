#!/usr/bin/node
function User(name) {
    // this = {};  (implicitly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;
    // return this;  (implicitly)
}

let user = new User("Jack");

console.log(user.name); // Jack
console.log(user.isAdmin); // false
/**
 * When a function is executed with new, it does the following steps:
 * A new empty object is created and assigned to this.
 * The function body executes. Usually it modifies this, adds new properties to it.
 * The value of this is returned.
 */

// So let user = new User("Jack") gives the same result as:
/*let user = {
  name: "Jack",
  isAdmin: false
};
*/
// Now if we want to create other users, we can call new User("Ann"), new User("Alice") and so on. Much shorter than using literals every time, and also easy to read.