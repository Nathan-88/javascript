Recursion is the concept that a function can be expressed in terms of itself.This allows the function to solve complex problems by breaking them down into smaller, simpler sub-problems. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:
```js
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```
However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.
```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

We'll write a recursive function that calculates the factorial of a number. The factorial of a positive integer n is the product of all positive integers less than or equal to n.

Here's the recursive function for calculating factorial:
```js
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: multiply n by the factorial of (n-1)
  return n * factorial(n - 1);
}
```
In this example, the factorial function checks for a base case where n is either 0 or 1. If the base case is met, it returns 1, which stops the recursion. Otherwise, it calculates the factorial by multiplying n with the factorial of (n-1), which is obtained by recursively calling the factorial function again.

Let's see the factorial function in action:
```js
console.log(factorial(5)); // Output: 120
```
When factorial(5) is called, it breaks down the problem into 5 * factorial(4), then 4 * factorial(3), 3 * factorial(2), 2 * factorial(1), and finally 1 * factorial(0). Since factorial(0) returns 1, the recursion stops and the intermediate results are multiplied together to get the final result of 120.

After the base case is met, the recursive calls start returning values back to the previous levels of recursion, eventually reaching the initial call and providing the final answer.

## Let's go through the steps of how the factorial calculation reaches the final answer of 120:

* The initial call is made to factorial(5).
* factorial(5) is not a base case, so it enters the recursive case and calculates 5 * factorial(4).
* Now, a new call is made to factorial(4). Again, it's not a base case, so it calculates 4 * factorial(3).
* Another call is made to factorial(3), which results in 3 * factorial(2).
* A new call is made to factorial(2), which computes 2 * factorial(1).
* Now, factorial(1) is encountered. It is a base case and immediately returns 1.
* The value 1 is returned to the previous level of recursion, where factorial(2) was being evaluated. So, 2 * factorial(1) becomes 2 * 1, which evaluates to 2.
* The value 2 is returned to the previous level of recursion, where factorial(3) was being evaluated. So, 3 * factorial(2) becomes 3 * 2, resulting in 6.
* This process continues until the initial call to factorial(5) receives the final value. So, 5 * factorial(4) becomes 5 * 24, which evaluates to 120.
* Finally, the initial call to factorial(5) returns the value 120, which is the factorial of 5.