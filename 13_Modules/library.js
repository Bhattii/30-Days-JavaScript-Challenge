// // Creating and Exporting Modules
// // Task 1: Create a module that export a function to add two numbers import and use this modules in another script.
// export const add = (a, b) => {
//     return a + b;
// }
            
// // Task 2: Create a module that export an object representing a person with properties and methods. Import and use this module in another Script.
// const person = {
//   firstName: "Muhammad",
//   lastName: "Imran",
//   age: 23,

//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   greet() {
//     return `Hello, my name is ${this.fullName()} and I am ${this.age} years old.`;
//   }
// };

// export { person }


// // Named and Default Export
// // Task 3: Create a module that export multiple function using named export. import and use these functions in another Script.
// // mathFunctions.js

// // Function to add two numbers
// export function Add(a, b) {
//   return a + b;
// }

// // Function to subtract two numbers
// export function subtract(a, b) {
//   return a - b;
// }

// // Function to multiply two numbers
// export function multiply(a, b) {
//   return a * b;
// }

// // Function to divide two numbers
// export function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Division by zero is not allowed.");
//   }
//   return a / b;
// }

// // Task 4
// function Greet(name) {
//   return `Hello, ${name}! Welcome!`;
// }

// export default Greet;


// // Importing Entire Modules
// // Task 5: Create a module that export multiple constants and functions. Import the entire module as an object in another script and use its properties.
// // Constants
// export const PI = 3.14159;
// export const E = 2.71828;

// // Functions
// export function calculateCircumference(radius) {
//   return 2 * PI * radius;
// }

// export function calculateArea(radius) {
//   return PI * radius * radius;
// }

// export function exponential(number) {
//   return Math.pow(E, number);
// }


// / Using Third Party Modules
// Task 6: Install a third party modules (i.e., lodash) using npm. Import and use a function from this module in a Script. 