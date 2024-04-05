As an example, let’s say we have user objects that hold the information about our users.

Most of our users have addresses in user.address property, with the street user.address.street, but some did not provide them.

In such case, when we attempt to get user.address.street, and the user happens to be without an address, we get an error:
```js
let user = {}; // a user without "address" property

alert(user.address.street); // Error!
```

### We can fix it using &&:
```js
let user = {}; // user has no address
// ...
alert( user && user.address && user.address.street ); // undefined (no error)
```
This is called “safe referencing”, because we safely reference properties deeper in the chain. If any part is undefined or null, it stops without errors.
The expression `user && user.address` evaluates to `undefined`, so then when we try to access `.street` on it – there is nothing to get the property from. So the evaluation stops and returns `undefined`.

### Optional chaining '?.'
The optional chaining `?.` stops the evaluation if the part before `?.` is undefined or null and returns that part. Optional chaining is like regular chaining but instead of throwing errors when something doesn't exist in the chain - returns `undefined`.

In other words, value?.prop:
- works as value.prop, if value exists,
- otherwise (when value is undefined/null) it returns undefined.

```js
let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)
```

// If there’s no variable user at all, then user?.anything triggers an error:
```js
console.log(user3?.name);  /* SyntaxError */
```
// ReferenceError: user is not defined

### Other variants: ?.(), ?.[]
The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.

For example, ?.() is used to call a function that may not exist.
```js
let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)
```
### NUllish coalescing
The nullish coalescing operator `??` provides a way to choose a value if the variable is `null` or `undefined`, but not for `0` or `""` or `false`. operator ?? returns the first argument if it’s not `null/undefined`. Otherwise, the second one.

```js
let x = null || "default";  // default

let y = undefined || "default";  // default

value ?? default              // the same as value !== null && value !== undefined ? value : default
```

```js
function f(a, b) { return a ?? b }   // the same as function f(a, b) { return a !== null && a !== undefined ? a : b }
```