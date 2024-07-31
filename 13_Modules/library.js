// Creating and Exporting Modules
// Task 1: Create a module that export a function to add two numbers import and use this modules in another script. 
export const add = (a, b) => {
    return a + b;
}
            
// Task 2: Create a module that export an object representing a person with properties and methods. Import and use this module in another Script.
const person = {
  firstName: "Muhammad",
  lastName: "Imran",
  age: 23,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  greet() {
    return `Hello, my name is ${this.fullName()} and I am ${this.age} years old.`;
  }
};

export { person } 


// Named and Default Export
// Task 3: Create a module that export multiple function using named export. import and use these functions in another Script.

