// Method 1: Import the whole module as one object
// Here "math" becomes an object that contains all exported functions
// Example: math.add(), math.subtract()
const math = require('./calc');

console.log('Result of Add:', math.add(10, 5));
console.log('Result of Subtract:', math.subtract(10, 5));


// Method 2: Destructuring Import
// Here we extract only the functions we need from the module
// So we can use them directly without writing "math."
const { add, subtract } = require('./calc');

console.log('Result of Add:', add(10, 5));
console.log('Result of Subtract:', subtract(10, 5));