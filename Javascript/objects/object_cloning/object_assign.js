#!/usr/bin/node
/**
 * The syntax is:
 * 
 * Object.assign(dest, ...sources)
 * 
 * The first argument dest is a target object.
 * Further arguments is a list of source objects.
 */

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
console.log(user.name); // John
console.log(user.canView); // true
console.log(user.canEdit); // true


// If the copied property name already exists, it gets overwritten:
let person = { name: "John" };

Object.assign(person, { name: "Pete" });

console.log(person.name); // now user1 = { name: "Pete" }


// Nested Cloning
let user1 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user1);
console.log( user1.sizes === clone.sizes ); // true, same object
// because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes:
user1.sizes.width = 60;    // change a property from one place
console.log(clone.sizes.width); // 60, get the result from the other one
console.log (Object.is(user1.sizes, clone.sizes)) //true

/**To fix that and make user and clone truly separate objects, we
 * should use a cloning loop that examines each value of us
 * [key] and, if it’s an object, then replicate its structure as
 * well. That is called a “deep cloning” or “structured
 * cloning”. There’s structuredClone method that implements deep
 * cloning.*/
