const PizzaOrder = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., preparing pizza)
    setTimeout(() => {
        const isPizzaReady = true; // Let's assume the pizza is ready
        if (isPizzaReady) {
            resolve('Pizza'); // Resolve the Promise with the result (pizza)
        } else {
            reject('Pizza not ready'); // Reject the Promise with an error message
        }
    }, 1000); // Simulating a delay of 1 second (1000 milliseconds)
});

PizzaOrder.then((data) => {
    console.log(data); // Log the resolved data (e.g., 'Pizza')
}).catch((err) => {
    console.log(`error message: ${err}`); // Log the error message (e.g., 'Pizza not ready')
});
