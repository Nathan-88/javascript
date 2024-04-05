#!/usr/bin/node
/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
*/

function getIndexToIns(arr, num) {
    arr.push(num); 
    arr.sort((a, b) => (a - b));
    console.log(arr);
    return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([20,3,5], 19));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));