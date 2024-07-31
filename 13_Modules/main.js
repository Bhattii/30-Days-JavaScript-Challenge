// // Task 1
// import { add } from "./library.js"
// console.log(add(2, 4));



// // task 2
// import { person } from "./library.js";
// console.log(person.fullName());
// console.log(person.greet());


// // task 3
// import { Add, subtract, multiply, divide } from './library.js'; // Import the functions

// // Using the imported functions
// const num1 = 10;
// const num2 = 5;

// console.log(`Addition: ${Add(num1, num2)}`);       // Output: Addition: 15
// console.log(`Subtraction: ${subtract(num1, num2)}`); // Output: Subtraction: 5
// console.log(`Multiplication: ${multiply(num1, num2)}`); // Output: Multiplication: 50
// console.log(`Division: ${divide(num1, num2)}`);     // Output: Division: 2


// // Task 4: Create a module that export a single function using default export. Import and use this function in another Script.
// import Greet from "./library.js"; // Import the default export from greet.js
// const userName = "Muhammad Imran";
// console.log(Greet(userName));

// // Task 5:

// import * as utilities from './library.js'; // Import the entire module as an object

// // Using the imported module's properties
// const radius = 5;
// console.log(`Circumference: ${utilities.calculateCircumference(radius)}`); // Output: Circumference: 31.4159
// console.log(`Area: ${utilities.calculateArea(radius)}`); // Output: Area: 78.53975
// console.log(`Exponential of 2: ${utilities.exponential(2)}`); // Output: Exponential of 2: 7.389056
// console.log(`Value of PI: ${utilities.PI}`); // Output: Value of PI: 3.14159
// console.log(`Value of E: ${utilities.E}`); // Output: Value of E: 2.71828

// Using Third Party Modules
// Task 6: Install a third party modules (i.e., lodash) using npm. Import and use a function from this module in a Script.

// Import the lodash library
// import _ from "lodash";

// // Example usage of _.chunk function
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunkedArray = a.chunk(numbers, 3);

// console.log(chunkedArray); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]


// Task 7: Install a third-party module (e.i.e axios) using npm. Import and use this module to make a network request in a Script.
import axios from "axios";
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log('Users:', response.data);
    })
    .catch(error => {
    console.error('Error fetching users:', error);
})