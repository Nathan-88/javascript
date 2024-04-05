async and await must be used together Eceptions: JS Modules and DevTools console

async and await only affect the function they are in, not the whole program. If you try to use them outside of a function, you will get a syntax error.

async and await only affects promise receiver and u can await any function that returns a promise, not just promises returned by async functions.

all async functions returns a promise

error handling: use try/catch block or .catch() method on the promise 

.then() is called when there is a value to work with, and .catch() is called when there is an error.
