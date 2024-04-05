The structuredClone method can clone most data types, such as objects, arrays, primitive values.

It also supports circular references, when an object property references the object itself (directly or via a chain or references).
For instance:
```js
let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;
let clone = structuredClone(user);
alert(clone.me === clone); // true
```

As you can see, clone.me references the clone, not the user! So the circular reference was cloned correctly as well.
Although, there are cases when structuredClone fails. For instance, when an object has a function property:
```js
// error
structuredClone({
  f: function() {}
});
```

Function properties aren’t supported.

To handle such complex cases we may need to use a combination of cloning methods, write custom code or, to not reinvent the wheel, take an existing implementation, for instance _.cloneDeep(obj) from the JavaScript library lodash.

[link to object cloning](https://javascript.info/object-copy)