function f(a, b) { return a ?? b }   // the same as 
function fa(a, b) { return a !== null && a !== undefined ? a : b }

console.log(f(1, 2)); // 1
console.log(fa(null, 2)); // 2