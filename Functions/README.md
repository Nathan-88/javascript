A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.
```
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
```
function nextInLine(arr, item) {
  // Only change code below this line
  
  return item;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```