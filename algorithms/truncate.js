#!/usr/bin/node
function truncateString(str, num) {
  const length = str.length
  if (num < length) {
    return str.slice(0, num) + "...";
  }
  else if (num >= length) {
    return str;
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));