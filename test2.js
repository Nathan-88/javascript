let user = {address: {street:"1 alius"}}; // a user without "address" property

// console.log(user.address.street); // Error!

// fix it using &&
console.log( user && user.address && user.address.street ); // undefined (no error)

