// chain multiple promises in javascript using the .then method when one promise is resolved another one is called and so on

firstPromise()
  .then((result) => {
    // Code to execute after the first promise is fulfilled
    // You can return another promise from here
    return secondPromise(result);
  })
  .then((secondPromiseResult) => {
    // Code to execute after the second promise is fulfilled
    // You can return another promise from here
    return thirdPromise(secondPromiseResult);
  })
  .then((thirdPromiseResult) => {
    // Code to execute after the third promise is fulfilled
  })
  .catch((error) => {
    // Error handling for any of the promises in the chain
  });
