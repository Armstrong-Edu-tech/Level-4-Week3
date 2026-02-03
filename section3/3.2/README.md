# Topic 3.2 – Importing and Working with Custom Modules

This folder demonstrates how to import custom modules using `require()` and use the exported functions. You will learn two different methods of importing: importing the whole module as an object, and using destructuring to import specific functions.

## What it does

**calc.js:**
- Defines a custom module with `add()` and `subtract()` functions
- Exports both functions using `module.exports = { add, subtract }`

**main.js:**
- Demonstrates two methods of importing the custom module:
  - **Method 1:** Import the whole module as one object (e.g., `math.add()`, `math.subtract()`)
  - **Method 2:** Destructuring import to extract specific functions (e.g., `add()`, `subtract()` directly)
- Calls the imported functions with sample values (10, 5)
- Logs the results to the console

## Installation

```bash
cd section3/3.2
npm install
```

## Running the Script

```bash
node main.js
```

You should see output like:
```
Result of Add: 15
Result of Subtract: 5
Result of Add: 15
Result of Subtract: 5
```

## Key Concepts

- **require()** – The function used to import modules in Node.js
- **Importing whole module** – `const math = require('./calc')` imports all exports as an object
- **Destructuring import** – `const { add, subtract } = require('./calc')` extracts specific functions
- **Module path** – Using `'./calc'` to import from the same directory (relative path)
- **Calling imported functions** – Using functions that were defined in another file

## Files

- `calc.js` – Custom module with `add()` and `subtract()` functions
- `main.js` – Main script that imports and uses the custom module
- `package.json` – Node.js project configuration

## Import Methods Explained

**Method 1: Full Object Import**
```javascript
const math = require('./calc');
console.log(math.add(10, 5));  // Access via object property
```

**Method 2: Destructuring Import**
```javascript
const { add, subtract } = require('./calc');
console.log(add(10, 5));  // Use function directly
```

Both methods achieve the same result, but destructuring is often preferred when you only need specific functions from a module.
