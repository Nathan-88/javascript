#!/usr/bin/node

/* The readline module in Node.js is commonly used for building command-line interfaces (CLIs) or for interacting with users through text-based input/output.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How old is your junior sister? ', (answer) => {
  console.log(`Your junior sister is ${answer} years old.`);
  rl.close();

  // Now that the first readline interface is closed, create the second one
  const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r2.question('What\'s your name? ', (answer) => {
    console.log(`Your name is ${answer}`);
    r2.close();
  });
});



/* you might be experiencing an issue where only the second question is being printed and the first question is not showing up. This could be due to the asynchronous nature of JavaScript. The
first question might not have enough time to be displayed before the second one is displayed.
To avoid this, you can use the rl.close() method inside the callback function of the first
question. This ensures that the first readline interface is closed before the second one is created. as illustrated in the code above*/