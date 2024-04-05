/**
 * How can you convert a callback-based function to a Promise-based
 * function?
 */
// Callback-based function
function fetchDataFromServer(callback) {
    // Simulate asynchronous operation
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        callback(null, data); // Success, no error
        // callback(new Error('Failed to fetch data')); // Uncomment to simulate an error
    }, 1000);
}

// Promise-based function
function fetchDataFromServerAsync() {
    return new Promise((resolve, reject) => {
        // Call the callback-based function inside the Promise
        fetchDataFromServer((error, data) => {
            if (error) {
                reject(error); // Reject with error if operation fails
            } else {
                resolve(data); // Resolve with data if operation is successful
            }
        });
    });
}

// Usage of the Promise-based function
fetchDataFromServerAsync()
    .then((data) => {
        console.log('Data fetched successfully:', data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

// In this example, fetchDataFromServerAsync() is the Promise-based version of fetchDataFromServer(). It wraps the callback-based function fetchDataFromServer() inside a Promise and handles the asynchronous result using resolve and reject. Now you can use the more versatile Promise syntax for handling asynchronous operations