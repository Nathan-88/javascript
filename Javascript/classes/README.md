### class
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person('John', 25);
person.sayHello();
```
Defines a Person class with a constructor accepting name and age.
Creates a person instance with the name 'John' and age 25.
The sayHello method prints a greeting message to the console using the instance's properties.

### Inheritance
```js
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the constructor of the parent class
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks loudly.`);
  }
}

const germanShepherd = new Dog('Buddy', 'German Shepherd');
germanShepherd.speak(); // Output: Buddy makes a sound.
germanShepherd.bark();  // Output: Buddy barks loudly.
```
Creates a Dog class that extends (inherits from) the Animal class.
The super(name) invokes the constructor of the parent class (Animal).
Adds a bark method to the Dog class.
Creates a germanShepherd instance and demonstrates calling methods from both parent and child classes.


###  Getter and Setter:
```javascript
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) {
      console.log("Radius must be positive.");
      return;
    }
    this._radius = value;
  }

  get area() {
    return Math.PI * this._radius * this._radius;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.radius); // Output: 5
myCircle.radius = 3;
console.log(myCircle.radius); // Output: 3
console.log(myCircle.area);   // Output: 28.274333882308138
```
Defines a Circle class with a private property _radius.
Provides a get method for retrieving the radius and a set method for setting it, with validation.
Introduces a computed property area that calculates the circle's area based on the radius.
Demonstrates creating a myCircle instance, setting and getting the radius, and calculating the area.

### Static Methods:
```javascript
class Calculator {
  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }
}

console.log(Calculator.add(5, 3));      // Output: 8
console.log(Calculator.subtract(7, 2)); // Output: 5
```
Defines a Calculator class with static methods (add and subtract).
Static methods can be called on the class itself, without creating an instance.


### Class Expression:
```javascript
const Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
};

const myRectangle = new Rectangle(4, 5);
console.log(myRectangle.area()); // Output: 20
```
Demonstrates creating a class using a class expression and assigning it to a variable (Rectangle).
Creates an instance of the Rectangle class and calculates its area.