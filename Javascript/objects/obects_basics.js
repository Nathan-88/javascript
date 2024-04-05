let user1 = {
  name: "John",
  "likes birds": true,  // multiword property name must be quoted
   age: 30,
};
// the last property can end with a comma its called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.

let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");
// access by variable
alert( user[key] ); // John (if enter "name")

// Computed properties
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
console.log(bag.appleComputers);

function makeUser(name, age) {
  return {
    name, // same as name:name
    age,
    // ...other properties
  };
}

let user2 = makeUser("John", 30);
alert(user2.name); // John
alert(user2.age); // 30