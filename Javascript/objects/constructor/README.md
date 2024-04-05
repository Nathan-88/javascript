## Constructor, operator "new"
The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.
That can be done using constructor functions and the "new" operator.

## Constructor function
Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.

```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

## Return from constructors
Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

But if there is a return statement, then the rule is simple:

- If return is called with an object, then the object is returned instead of this.
- If return is called with a primitive, it’s ignored.

```js
function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- returns this object
}

alert( new BigUser().name );  // Godzilla, got that object
```