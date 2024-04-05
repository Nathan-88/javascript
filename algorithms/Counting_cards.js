#!/usr/bin/node
/* 
Count Change	Card
+1	            2, 3, 4, 5, 6
0	            7, 8, 9
-1	            10, 'J', 'Q', 'K', 'A'

You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.
*/

let count = 0;

function cc(card) {
  // Only change code below this line
  var regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || regex.test(card)) {
    count--;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";

  // Only change code above this line
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(4));
console.log(cc(5));
console.log(cc(6));