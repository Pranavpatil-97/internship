const nums = [10, 25, 3, 47, 8];

nums.push(60);                 // add at end
nums.pop();                    // remove from end
nums.unshift(1);               // add at start
console.log(nums, "length:", nums.length);

console.log("Includes 25?", nums.includes(25));
console.log("Index of 47:", nums.indexOf(47));

console.log("Doubled:", nums.map(n => n * 2));
console.log("Greater than 10:", nums.filter(n => n > 10));
console.log("Sum:", nums.reduce((total, n) => total + n, 0));
console.log("Max:", Math.max(...nums));
console.log("Sorted:", [...nums].sort((a, b) => a - b));

nums.forEach((n, i) => console.log(`Index ${i}: ${n}`));