//A race condition is a scenario that can occur when two or more asynchronous operations are performed on a shared resource. The operations must be performed in a specific sequence to work correctly, but the timing of the operations is unpredictable, which can cause the application to produce incorrect results. i.ie it occurs when multiple asynchronous tasks are initiated, and the order of their completion affects the final outcome of the program. This can lead to unpredictable behavior and bugs in your code.

let sharedVariable = 0;

function incrementVariable() {
    sharedVariable++;
}

// Simulate asynchronous operations
setTimeout(incrementVariable, 100); // Increment sharedVariable after 100 milliseconds
setTimeout(incrementVariable, 200); // Increment sharedVariable after 200 milliseconds

// At this point, sharedVariable might not have been incremented by any of the asynchronous operations
console.log(sharedVariable); // Output: 0 (Expected: 1 or 2 depending on the timing of asynchronous operations)

