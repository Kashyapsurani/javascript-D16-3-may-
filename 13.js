var sum = 1;
function calculateFactorial(fec) {
  for (x = 1; x <= fec; x++) {
    sum = sum * x;
  }
  return sum;
}

var s = calculateFactorial(5);
console.log(s)
