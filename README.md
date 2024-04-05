In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.
```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```
If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

In JavaScript, you can determine the type of a variable or a value with the typeof

The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.
```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

If you need to match one value against many options, you can use a switch statement. A switch statement compares the value to the case statements which define various possible values. Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.
```js
switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
```

In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.
A default statement should be the last case.
```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:
```js
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

A better way to compare. Since === returns true or false, we can return the result of the comparison:
```js
function isEqual(a, b) {
  return a === b;
}
```

adding a + sign in front of a value or expression is a technique used to explicitly convert the value to a numeric type (number). This is called the "unary plus" operator. It's a shorthand way to perform type coercion, specifically converting a string that represents a numeric value into an actual number.
```js
const stringValue = "42"; // A string representing a number
const numericValue = +stringValue; // Using the unary plus operator to convert to a number

console.log(typeof stringValue); // Output: "string"
console.log(typeof numericValue); // Output: "number"
```

In this example, the +stringValue operation converts the string "42" into the number 42, changing its data type from a string to a number. This can be useful when you need to perform mathematical operations on values that are originally stored as strings.

However, it's important to note that using the unary plus operator for type coercion can be a bit less readable and more prone to errors. An alternative approach is to use the parseInt() or parseFloat() functions to achieve similar results, which can provide more explicit control over the type conversion and handling of non-numeric input.

The parseInt() function parses a string and returns an integer. Here's an example:
```js
const stringValue = "42";
const numericValue = parseInt(stringValue); // Using parseInt() for type conversion

console.log(typeof stringValue); // Output: "string"
console.log(typeof numericValue); // Output: "number"
```

Keep in mind that if the string cannot be converted into a valid number, the result will be NaN (Not-a-Number). Always make sure to handle these cases appropriately in your code.


[Javascript]("https://www.digitalocean.com/community/tutorial-series/how-to-code-in-javascript")