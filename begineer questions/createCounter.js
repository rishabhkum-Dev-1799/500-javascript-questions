/**
 * In this lab, you will build a counter function creator. You are tasked with creating a function that takes an integer n as input and returns another function called counter. This counter function should initially return the input n and then return 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

Your implementation should use ESM (ECMAScript Modules) for importing and exporting functions and variables. The provided files in the lab include index.js and package.json. You will be required to work with the function createCounter in the index.js file.

Examples
Example 1:

const counter = createCounter(5);
console.log(counter()); // Output: 5
console.log(counter()); // Output: 6
console.log(counter()); // Output: 7
Example 2:

const counter = createCounter(-3);
console.log(counter()); // Output: -3
console.log(counter()); // Output: -2
console.log(counter()); // Output: -1
Example 3:

const counter = createCounter(42);
console.log(counter()); // Output: 42
console.log(counter()); // Output: 43
console.log(counter()); // Output: 44
Note: Make sure to export any function or variable that needs to be imported in the evaluation script from the user's files.
 */

//Solutions
/**
 * @param {number} n
 * @return {Function} counter
 */
export function createCounter(n) {
  // return a function
  const increamentCounter = () => n++;
  return increamentCounter;
}

// Sample Test Cases

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

const secondCounter = createCounter(42);
console.log(secondCounter()); // 42
console.log(secondCounter()); // 43
