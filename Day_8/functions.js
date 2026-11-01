function add(a, b) { return a + b; }
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

function divide(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}

function factorial(n) {
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(add(5, 3), subtract(5, 3), multiply(5, 3), divide(5, 0));
console.log("Factorial of 5:", factorial(5));
console.log("Is 17 prime?", isPrime(17));