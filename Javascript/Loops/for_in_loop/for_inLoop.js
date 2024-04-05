#!/usr/bin/node
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  console.log(`${key}: ${user[key]}`);
}

if ('name' in user){
    console.log(true);
}