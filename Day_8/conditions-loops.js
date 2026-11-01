// Even or odd
const n = 7;
console.log(n + (n % 2 === 0 ? " is even" : " is odd"));

// Grade using if / else if
const marks = 82;
if (marks >= 75) console.log("Grade A");
else if (marks >= 60) console.log("Grade B");
else if (marks >= 40) console.log("Grade C");
else console.log("Fail");

// switch
const day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Other day");
}

// for loop: multiplication table
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// while loop: sum of 1 to 10
let i = 1, sum = 0;
while (i <= 10) { sum += i; i++; }
console.log("Sum 1-10:", sum);

// for...of
for (const ch of "Java") console.log(ch);