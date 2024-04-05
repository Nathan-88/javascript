#!/usr/bin/node

function Animal (name, energy) {
    this.name = name
    this.energy = energy
}

Animal.prototype.age = 12

Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy -= length
}

const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)

leo.eat(2) // Leo is eating.
console.log(leo.name); // Leo
console.log(leo.age) // 12
console.log(leo) // Animal { name: 'Leo', energy: 9 }
