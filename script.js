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

console.log(findLargest(15,10)) // 15

// Problem 6 — Easy: Count Even Numbers
const countEven =(number)=> {
  let count=0;
  for (let i=0;i<number.length;i++){
    if( number[i] % 2 === 0 ){
    count++;
  }
  }
  return count;
}

console.log(countEven([2, 4, 8])); // 3

// Problem 7 — Easy: Double Each Number in an Array
const doubleNumbers = numbers => numbers.map(number => number * 2);

console.log(doubleNumbers([1, 2, 3, 4])) // [ 2, 4, 6, 8 ]

// Problem 8 — Easy: Filter Numbers Greater Than 10
const filterGreaterThan10 = numbers => numbers.filter(number => number > 10);

console.log(filterGreaterThan10([5, 12, 8, 20, 15]));   // [12, 20, 15]

// Problem 9 — Easy: Sum All Numbers in an Array
const sumArray = numbers => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sumArray([1, 2, 3, 4]));   //10

const getNames = people => people.map(person => person.name);

let result=getNames([
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
]);

console.log(result) //[ 'Alice', 'Bob', 'Charlie' ]

// Problem 11 — Easy: Filter Adults
const getAdults = people => people.filter(person => person.age >= 18 );

let result=getAdults([
  { name: "Alice", age: 22 },
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 17 }
]);

console.log(result) // [ { name: 'Alice', age: 22 }, { name: 'Charlie', age: 30 } ]

// Problem 12 — Easy: Get Total Price
const getTotalPrice = totalPrice => totalPrice.reduce((acc,curr)=>acc+curr.price,0) 

let result=getTotalPrice([
  { name: "Book", price: 100 },
  { name: "Pen", price: 20 },
  { name: "Bag", price: 500 }
]);

console.log(result) //620

// Problem 13 — Easy: Convert Names to Uppercase
const getUppercaseNames = people =>
  people.map(person => person.name.toUpperCase());

console.log(getUppercaseNames([
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" }
]))
