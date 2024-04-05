#!/usr/bin/node

const obj1 = {
    name: 'John',
    age: 30,
};

Object.freeze(obj1);// This prevents the data mutation
obj1.name = 'Jane';
obj1.age = 40;
console.log('After freezing object');//the obj properties can't change
console.log(obj1);
const [name, age] = Object.values(obj1)
console.log(name);
console.log(age)
