#!/usr/bin/node
function SmallUser(nameu, agey) {

  this.name = nameu;
  this.age = agey
   // <-- returns this
}

let obj = new SmallUser("Nathan", 5);
let obj1 = new SmallUser("blessing", 9);
console.log( obj.age, obj.name);  // John
console.log( obj1.age, obj1.name); 
/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/