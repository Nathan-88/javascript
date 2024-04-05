#!/usr/bin/node
/*Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.*/

function mutation(arr) {
  arr[0] = arr[0].toUpperCase();
  arr[1] = arr[1].toUpperCase();
  for (let i = 0; i < arr[1].length; i++) {
    if (!arr[0].includes(arr[1][i])) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
