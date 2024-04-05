JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

Use Math.random() to generate a random decimal number.
Multiply that random decimal number by 20.
Use Math.floor() to round this number down to its nearest whole number.
Remember that Math.random() can never quite return a 1, so it's impossible to actually get 20 since you are rounding down with Math.floor(). This process will give you a random whole number in the range from 0 to 19.

Putting everything together, this is what your code looks like:
```js
Math.floor(Math.random() * 20);
```
