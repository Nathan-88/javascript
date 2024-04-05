#!/usr/bin/node
function SmallUser() {

  this.name = "John";

  return; // <-- returns this
}

console.log( new SmallUser().name );  // John