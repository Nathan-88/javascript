#!/usr/bin/node
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
console.log( rabbit.eats ); // true (**)
console.log( rabbit.jumps ); // true



let Animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let Rabbit = {
  jumps: true,
  __proto__: Animal
};

let longEar = {
  earLength: 10,
  __proto__: Rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)

/*Now if we read something from longEar, and it’s missing, JavaScript will look for it in rabbit, and then in animal.*/