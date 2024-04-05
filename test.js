#!/usr/bin/node

// let z = 'john';
// z = z.substring(0,2).toUpperCase();
// console.log(`my name is ${z}`)
// let a = 'john, danny, issac';
// console.log(a.split(', '));//slits a string into an array


// const person = {
//     firstName: 'john',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'Dancing', 'Sports', 'Movies'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
// person.email = 'johnJI@email.com';
// console.log(person['hobbies']);
// console.log(person.firstName);
// // Iterate over the object's properties with a for...of loop
// for (const keys in person) {
//     if (typeof person[keys] === 'object') {
//         for(const nestkey in person[keys]){
//             console.log(`${person[keys][nestkey]}`);
//         }
//     } else {
//         console.log(`${person[keys]}`);
//     }
// }
// // to turn the keys into a variable
// const {firstName, lastName} = person;
// console.log(lastName)

// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };
// const gloveBoxContents = myStorage.car.inside["glove box"]
// console.log(gloveBoxContents);



// const people = {
//   employee: {
//     person1 : ['John', 25, 14000],
//     person2 : ['Amber', 30, 20000]
//   },
//   manager: {
//     person1 : ['Dee', 40, 30000],
//     person2 : ['Dum', 45, 50000]
//   }
// };
// console.log(people.employee ? people.employee.person1:undefined);
// const { employee: {person1, person2} } = people
// console.log(person1);
// console.log(person2)







// const q1 = [1,2,3];
// const q2 = [4,5,6];
// const q3 = [...q1] + [...q2]
// console.log(q3);
// console.log(typeof(q3))

// (function(a){

//  return (function(){

//    console.log(a);

//    a = 6;

//  })()

// })(21);


// function solve(arr, rotations){

//  if(rotations == 0) return arr;

//  for(let i = 0; i < rotations; i++){

//    let element = arr.pop();

//    arr.unshift(element);

//  }

//  return arr;

// }
// console.log(solve([44, 1, 22, 111], 5));

let sum = 0; 

const a = [1, 2, 3];

a.forEach(getSum);

console.log(sum);

function getSum(ele) {

   sum += ele;

}

const example = ({ a, b, c }) => {

 console.log(a, b, c);

};

example(0, 1, 2);

let n = 24;

let l = 0, r = 100, ans = n;

while(l <= r) {

   let mid = Math.floor((l + r) / 2);

   if(mid * mid <= n) {

       ans = mid;

       l = mid + 1;

   }

   else {

       r = mid - 1;

   }

}

console.log(ans);

const obj1 = {Name: "Hello", Age: 16};

const obj2 = {Name: "Hello", Age: 16};

console.log(obj1 === obj2);
