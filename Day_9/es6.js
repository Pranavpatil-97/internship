// Arrow functions
const square = (n) => n * n;
const greet = (name = "Guest") => `Hello, ${name}!`;     // default parameter
console.log(square(5), greet(), greet("Pranav"));

// Destructuring
const student = { name: "Amit", age: 20, course: "CSE" };
const { name, age } = student;
console.log(name, age);

const [first, second, ...others] = [10, 20, 30, 40, 50];
console.log(first, second, others);

// Spread
const a = [1, 2, 3];
const b = [4, 5];
console.log([...a, ...b]);
console.log({ ...student, age: 21, city: "Jalgaon" });   // copy and override

// Rest parameters
const sum = (...nums) => nums.reduce((total, n) => total + n, 0);
console.log(sum(1, 2, 3, 4, 5));

// map, filter, reduce
const marks = [35, 82, 67, 91, 48];
console.log("Plus 5:", marks.map((m) => m + 5));
console.log("Passed:", marks.filter((m) => m >= 40));
console.log("Total:", marks.reduce((t, m) => t + m, 0));
console.log("Highest:", Math.max(...marks));

// Searching arrays
const students = [
  { name: "Amit", marks: 85 },
  { name: "Neha", marks: 92 },
  { name: "Rahul", marks: 35 }
];
console.log(students.find((s) => s.name === "Neha"));
console.log(students.some((s) => s.marks < 40));       // any fail?
console.log(students.every((s) => s.marks >= 40));     // all pass?