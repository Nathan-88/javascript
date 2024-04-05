// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(script);

//   document.head.append(script);
// }

// loadScript('/my/script.js', function() {
//   // the callback runs after the script is loaded
//   newFunction(); // so now it works

// });

// the second argument is a function (usually anonymous) that runs when the action is completed.

//Here’s a runnable example with a real script:
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ ); // _ is a function declared in the loaded script
});

// That’s called a “callback-based” style of asynchronous programming. A function that does something asynchronously should provide a callback argument where we put the function to run after it’s complete.