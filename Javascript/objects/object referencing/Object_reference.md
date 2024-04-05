A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
The object is stored somewhere in memory, while the user variable has a “reference” to it.

We may think of an object variable, such as user, like a sheet of paper with the address of the object on it.

When we perform actions with the object, e.g. take a property user.name, the JavaScript engine looks at what’s at that address and performs the operation on the actual object.

Now here’s why it’s important.

When an object variable is copied, the reference is copied, but the object itself is not duplicated.

For instance:
```js
let user = { name: "John" };

let admin = user; // copy the reference
```
Now we have two variables, each storing a reference to the same object:

As you can see, there’s still one object, but now with two variables that reference it. We can use either variable to access the object and modify its contents:
```js
let user = { name: 'John' };
let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference
```

### Comparison by reference
Two objects are equal only if they are the same object.
```js
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true
```

### Cloning and merging, Object.assign
So, copying an object variable creates one more reference to the same object. But what if we need to duplicate an object?
We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level. Like this:
```js
let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}
// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it
alert( user.name ); // still John in the original object
```

We also can use Object.assign to perform a simple object cloning:
```js
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30
```