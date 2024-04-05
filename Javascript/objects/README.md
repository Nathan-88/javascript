For multiword properties, the dot access doesn’t work rather we use square bracket :
```js
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];
```

Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:
```js
let key = "likes birds";
// same as user["likes birds"] = true;
user[key] = true;
```

The dot notation cannot be used in a similar way:
```js
let user = {
  name: "John",
  age: 30
};

let key = "name";
alert( user.key ) // undefined
```

### Computed properties
We can use square brackets in an object literal, when creating an object. That’s called computed properties.

For instance:
```js
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
```

### Property value shorthand
In real code, we often use existing variables as values for property names.
For instance:
```js
function makeUser(name, age) {
  return {
    name, // same as name:name
    age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
alert(user.age); // 30
```

### property names limitation
in object property, there’s no such restriction to a variable having a name equal to one of the language-reserved words like “for”, “let”, “return” etc in Js.:
```js
// these properties are all right
let obj = {
  for: 1,
  let: 2,
   0: "test", // same as "0": "test"
  return: 3
};
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)
alert( obj.for + obj.let + obj.return );  // 6
```

### Property existence test, “in” operator
we use the special operator "in":
```js
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```

### The "for..in" loop
To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct.
syntax:
```js
for (key in object) {
  // executes the body for each key among object properties
}
```

### Ordered like an object
“ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.
```js
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```

The “integer property” term means a string that can be converted to-and-from an integer without a change. So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not.


### Object-oriented programming
When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”.

OOP is a big thing, an interesting science of its own. How to choose the right entities? How to organize the interaction between them? That’s architecture, and there are great books on that topic, like “Design Patterns: Elements of Reusable Object-Oriented Software” by E. Gamma, R. Helm, R. Johnson, J. Vissides or “Object-Oriented Analysis and Design with Applications” by G. Booch, and more.