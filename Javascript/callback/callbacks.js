#!/usr/bin/node
function performAsyncOperation(callback) {
  setTimeout(function () {
    console.log("Async operation completed.");
    callback(); // Call the callback function
  }, 4000); // Simulate a 4-second delay
}

function callbackFunction() {
  console.log("Callback function executed.");
}

// Call the function with a callback
performAsyncOperation(callbackFunction);

console.log("Code continues to execute.");


// The code continues to execute after calling performAsyncOperation, demonstrating that the program doesn't wait for the asynchronous operation to finish.

// When the 4-second delay is over, the callbackFunction is called, and "Callback function executed" is logged to the console.