The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

example:
```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```