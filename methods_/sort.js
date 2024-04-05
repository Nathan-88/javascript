#!/usr/bin/node
// function sort_(arr) {
//     arr.sort()
//     return arr;
// }
/*
why sort() did't work is because javascript sorts numbers alphabetically. e.g A=1, B=2, C=3.
so if we have 3 strings C(3), B(23) and AB(12).
javascript will sort them as AB, BC and C in an ascending order
*/

// function sort_(arr) {
//   arr.sort((a, b) => a - b);
//   return arr;
// }

const number = [20,3,5]
// luckily we can support the sort() method with a basic comparison function which will do the trick:
// function(a,b) {return a - b};
number.sort(function(a, b) {return a - b});
console.log(number)

// to sort strings in an array
const string = ['a', 'c', 'b', 'd']
string.sort()
console.log(string);

// to sort an array of strings with localeCompare ALPHABETICALLY
const actions = ['eat', 'sing', 'ride', 'dance'];

actions.sort((a, b) => a.localeCompare(b));
console.log(actions);

// to sort an array of strings with localeCompare REVERSE ALPHABETICALLY
const actions1 = ['eat', 'sing', 'ride', 'dance'];

actions1.sort((a, b) => b.localeCompare(a));
console.log(actions1);


// to sort an array of objects
const students = [
    {name: 'John', age: 20},
    {name: 'Jane', age: 21},
    {name: 'Jack', age: 19}
]
students.sort((a, b) => a.age - b.age)
console.log(students);

// to sort an array of objects by string property
const students2 = [
    {name: 'John', age: 20},
    {name: 'Jane', age: 21},
    {name: 'Jack', age: 19}
]
students2.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if(nameA < nameB) {
        return -1;
    }
    if(nameA > nameB) {
        return 1;
    }
    return 0;
})
console.log(students2);

// to sort an array of objects by string property in descending order
const students1 = [
    {name: 'John', age: 20},
    {name: 'Jane', age: 21},
    {name: 'Jack', age: 19}
]
students1.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if(nameA < nameB) {
        return 1;
    }
    if(nameA > nameB) {
        return -1;
    }
    return 0;
})

console.log(students1);

