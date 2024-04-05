#!/usr/bin/node
function checkScope() {
  var i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

note = checkScope();
console.log(note);