const student = {
  id: 101,
  name: "Amit",
  marks: [80, 90, 75],
  address: { city: "Jalgaon", state: "Maharashtra" },
  greet() { return `Hello, I am ${this.name}`; }
};

console.log(student.name);              // dot notation
console.log(student["id"]);             // bracket notation
console.log(student.address.city);      // nested
console.log(student.greet());

student.course = "CSE";                 // add property
student.name = "Amit Sharma";           // update
delete student.id;                      // remove

for (const key in student) {
  console.log(key, "->", student[key]);
}

console.log(Object.keys(student));

// Array of objects
const students = [
  { name: "Amit", marks: 85 },
  { name: "Neha", marks: 92 },
  { name: "Rahul", marks: 35 }
];
console.log("Passed:", students.filter(s => s.marks >= 40).map(s => s.name));