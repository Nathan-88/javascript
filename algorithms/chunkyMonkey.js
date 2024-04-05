//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// method 1
// function chunkArrayInGroups(arr, size) {
//   let newArr = []; // create new array
//   let j = 0; // set counter to 0
//   newArr[j] = []; // set newArr[0] to empty array
//   for (let i = 0; i < arr.length; i++) { // iterate through arr
//     if (newArr[j].length < size){ // if length of newArr[j] is less than size
//       newArr[j].push(arr[i]); // push current index of arr to newArr[j]
//     } else {
//       j += 1; // increment counter
//       newArr[j] = []; // set newArr[j] to empty array
//       newArr[j].push(arr[i]); // push current index of arr to newArr[j]
//     }
//   }
//   return newArr;
// }

// method 2

// This function takes an array and a size as arguments
function chunkArrayInGroups(arr, size) {
  // This defines a new array to hold the chunks
  const newArr = [];
  // This for loop iterates the array
  for (let i = 0; i < arr.length; i += size) {
    // This pushes a slice of the array in the group size
    newArr.push(arr.slice(i, i + size));
  }
  // This returns the new array
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));