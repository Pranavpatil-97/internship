var oldStyle = "var";
let age = 20;
const name = "Pranav";
age = 21;                       // allowed with let
// name = "Amit";               // error: const cannot change

console.log(name, age, oldStyle);
console.log(typeof name, typeof age, typeof true, typeof undefined, typeof null);

let a = 10, b = 3;
console.log("Sum:", a + b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);
console.log("5 == '5':", 5 == "5");     // true
console.log("5 === '5':", 5 === "5");   // false
console.log("Logical:", a > 5 && b < 5);