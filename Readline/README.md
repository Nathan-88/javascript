In Node.js, the readline module provides an interface for reading input from a readable stream (like a file or process.stdin) line by line. It's particularly useful for building interactive command-line applications or handling input/output in a user-friendly manner. The readline module is part of Node.js's core libraries, so you don't need to install anything extra to use it.

Here's an explanation of some commonly used methods in the readline module along with example code:

createInterface(): This method is used to create an instance of the readline interface. It takes in an input stream and an output stream.
```javascript
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

question(): This method is used to display a question to the user and wait for their input. The callback function is executed once the user enters a response.
```javascript
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
```

line event: The line event is emitted whenever the user enters a line of text.
```javascript
rl.on('line', (input) => {
  console.log(`You entered: ${input}`);
});
```

close event: The close event is emitted when the readline interface is closed, typically when you want to stop reading input.
```javascript
rl.on('close', () => {
  console.log('Readline interface closed.');
});
```

prompt(): This method is used to display a prompt message to the user.
```javascript
rl.setPrompt('Enter a number: ');
rl.prompt();

rl.on('line', (input) => {
  const number = parseInt(input);
  console.log(`You entered: ${number}`);
  rl.close();
});
```

pause() and resume(): These methods are used to pause and resume the input stream.
```javascript
rl.question('Enter something: ', (input) => {
  console.log(`You entered: ${input}`);
  rl.pause();

  // Some asynchronous task
  setTimeout(() => {
    rl.resume();
    rl.close();
  }, 2000);
});
```

These are just a few examples of the methods provided by the readline module in Node.js. You can use these methods to build interactive command-line applications, gather user input, validate input, and more. The module offers a way to make console interactions smoother and more user-friendly.