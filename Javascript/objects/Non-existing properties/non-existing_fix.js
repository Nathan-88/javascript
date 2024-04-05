#!/usr/bin/node
let user = {}; // a user without "address" property

// console.log(user.address.street); // Error!

// fix it using &&
console.log( user && user.address && user.address.street ); // undefined (no error)

// fix it using try..catch
try {
  console.log( user.address.street );
}
catch(err) {
    console.log(err.message);
    }

// fix it using if
if (user.address) {
  console.log(user.address.street);
}
else{
    console.log("no address");
}

// fix it using ?
console.log( user?.address?.street ); // undefined (no error)
