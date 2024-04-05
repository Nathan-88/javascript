/*function showMessage(text) {
  // ...
  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message */


/*function showCount(count) {
    alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown*/


function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

showPrimes(10);

// show movie base on age
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);
showMovie(age);
//In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the alert.
// A function with an empty return or without it returns undefined
// If a function does not return a value, it is the same as if it returns undefined: