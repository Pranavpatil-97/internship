// Largest of three
const largest = (a, b, c) => Math.max(a, b, c);
console.log("Largest:", largest(12, 45, 9));

// Reverse a number
function reverseNumber(n) {
  let rev = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
}
console.log("Reverse of 1234:", reverseNumber(1234));

// Palindrome string
const isPalindrome = s => s === s.split("").reverse().join("");
console.log("madam palindrome?", isPalindrome("madam"));

// Count vowels
const countVowels = s => [...s.toLowerCase()].filter(c => "aeiou".includes(c)).length;
console.log("Vowels in 'JavaScript':", countVowels("JavaScript"));

// Fibonacci series
function fibonacci(n) {
  const series = [0, 1];
  for (let i = 2; i < n; i++) series.push(series[i - 1] + series[i - 2]);
  return series;
}
console.log("Fibonacci:", fibonacci(10));

// Remove duplicates
console.log("Unique:", [...new Set([1, 2, 2, 3, 3, 4])]);