function isLeapYear(a) {
if (a % 4 == 0) {
  return true;
} else {
  return false;
}
}

var sum = isLeapYear(2020)
console.log(sum)
