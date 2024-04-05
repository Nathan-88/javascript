In JavaScript, the hasOwnProperty method is used to check if an object has a specific property. It is a method of the Object prototype and is often used to determine whether an object contains a particular property, without looking up the prototype chain.

```js
// Create an object
let myObject = {
  name: "John",
  age: 30,
};

// Check if the object has a specific property
let hasNameProperty = myObject.hasOwnProperty("name");
let hasGenderProperty = myObject.hasOwnProperty("gender");

console.log(hasNameProperty); // true
console.log(hasGenderProperty); // false
```

In the example above, hasNameProperty will be true because the myObject has a property named "name." However, hasGenderProperty will be false because there is no "gender" property in the object.

It's important to note that hasOwnProperty only checks for the presence of a property in the specific object it's called on. It does not check the prototype chain, so it won't return true for properties inherited from the object's prototype.

If you want to check for a property's existence in the object as well as in its prototype chain, you can use the in operator or the Object.prototype.hasOwnProperty.call(obj, prop) method. Here's an example of using the in operator:

```js
var hasAgePropertyInPrototype = "age" in myObject;
console.log(hasAgePropertyInPrototype); // true
```