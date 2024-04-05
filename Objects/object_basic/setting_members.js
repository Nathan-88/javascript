#!/usr/bin/node
const person = {
    name: {
        first: "John"
    }
}
person.age = 45;
person["name"]["last"] = "Cratchit";

console.log(person.age);
console.log(person["name"]["last"]);
console.log(person);
