let result;

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    result = 'Promise 1 resolved';
    resolve();
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    result = 'Promise 2 resolved';
    resolve();
  }, 500);
});

Promise.race([promise1, promise2]).then(() => {
  console.log('Result:', result);
});

/*In this example, we have two promises (promise1 and promise2) that set the result variable with different values when they resolve. We use Promise.race() to race these promises against each other, and the one that resolves first will determine the final value of result.

To prevent race conditions when using Promises use promise.all() or promise.any(). The .catch() method is used to handle any errors that may occur in the promises.
*/
Promise.all([fetchData1(), fetchData2(), fetchData3()])
    .then((results) => {
        // Process results
    })
    .catch((error) => {
        // Handle error
    });
