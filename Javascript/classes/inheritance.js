#!/usr/bin/node

class Animal {
    constructor (name) {
        this.name = name;
    } 

    speak(){
        console.log(`Hello ${this.name}`);
    }
}


class Dog extends Animal{
    constructor(name, breed)  {
        super(name); // calls the constructor of the parent class
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks loudly.`);
    }
}

const germanShepherd = new Dog('Buddy', 'German Shepherd');
germanShepherd.speak(); // Output: Hello Buddy
germanShepherd.bark();  // Output: Buddy barks loudly.