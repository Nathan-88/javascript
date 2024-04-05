let name;
console.log(name ?? "no name"); // no name

let firstName = 'John';
let lastName = null;
let nickName = "Supercoder";
console.log(`${firstName} ${lastName || nickName}`); // Supercoder