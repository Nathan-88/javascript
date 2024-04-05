You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.
```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```
In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.

do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.
```js
const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

