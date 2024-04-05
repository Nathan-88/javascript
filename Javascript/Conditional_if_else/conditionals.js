// If and else

/* Any string except an empty one (and "0" is not empty) becomes true in the logical context.
We can run and check:

if ("0") {
  alert( 'Hello' );
}*/


/*
let year = prompt('how old is my junior sister?', '');

if (year < 15) {
    alert('Nope go higher')
}
else if (year > 15) {
    alert('Nope go lower')
}
else {
    alert("you are right")
}*/


// Ternary Operators
let age = prompt('age?', 18);
let accessAllowed = (age > 18) ? true : false;
alert(accessAllowed);

// Multiple '?'
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

//Non traditional use of ?
let company = prompt('which company created javascript?', '');

(company == 'Netscape') ?
    alert('Right!') : alert('Wrong.');

let login = prompt('employee or Director', 'Employee');
let messages = (login== 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';
alert(messages);