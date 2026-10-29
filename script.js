// ==========================================
// TOPIC 1: ARROW FUNCTIONS
// ==========================================

// Problem 1 — Easy : Square of a Number
const square = num => num * num;
console.log(square(3));  // 9

// Problem 2 — Easy : Check Even or Odd
const isEven = num => num % 2 === 0;
console.log(isEven(2)); // true

// Problem 3 — Easy: Multiply Array Values by 3
const numbers = [1, 2, 3, 4, 5]
const multiply = numbers => numbers.map(number => number * 3);
console.log(multiply(numbers)) // [ 3, 6, 9, 12, 15 ]

// Problem 4 — Easy: Add Two Numbers
const add =(a, b)=> a + b;
console.log(add(5,3)) // 8

// Problem 5 — Easy: Find the Largest Number
const findLargest =(a, b)=> a > b ? a:b;
console.log(findLargest(15,10))

