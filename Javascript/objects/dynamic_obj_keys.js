#!/usr/bin/node
//The square brackets are necessary to create a dynamic key based on the departmentName variable.
const departmentName = "HR";
const obj1 = {
  [`${departmentName}`]: "Some value" // obj1 will have a key "HR"
};

const obj2 = {
  [departmentName]: "Some value" // obj2 will have a key "HR"
};

console.log(obj1); // Output: { HR: 'Some value' }
console.log(obj2); // Output: { HR: 'Some value' }

