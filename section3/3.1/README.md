# Topic 3.1 – Creating Custom Modules

This folder demonstrates how to create custom modules in Node.js by defining functions in a separate file and exporting them using `module.exports`. You will learn different methods of exporting functions and objects.

## What it does

**calc.js:**
- Defines utility functions (`add` and `subtract`) for basic math operations
- Demonstrates multiple ways to export functions:
  - **Method 1:** Define functions first, then export as an object
  - **Method 2:** Export directly (inline) as an object
  - **Method 3:** Adding properties one by one to `module.exports`
  - **Method 4:** Using the `exports` shorthand

This file shows all export methods, but typically you would choose one method per module. The final export method used is the object export with `module.exports = { add, subtract }`.

## Installation

```bash
cd section3/3.1
npm install
```

## Running the Script

This module is designed to be imported by other files. To see it in action, you would typically import it in another file (as shown in topic 3.2).

However, you can verify the module structure:
```bash
node calc.js
```

(Note: This won't produce output since the file only exports functions; it doesn't execute them.)

## Key Concepts

- **Custom modules** – Creating separate files to organize related functionality
- **module.exports** – The primary way to export functions, objects, or values from a module
- **exports shorthand** – Using `exports.functionName` as a shorter syntax
- **Export methods:**
  - Exporting an object with multiple functions
  - Exporting functions individually
  - Using ES6 shorthand for object properties
- **Code organization** – Separating logic into reusable modules

## Files

- `calc.js` – Custom module with `add()` and `subtract()` functions demonstrating various export methods
- `package.json` – Node.js project configuration

## Export Methods Explained

1. **Define First, Export Later:**
   ```javascript
   function add(a, b) { return a + b; }
   module.exports = { add, subtract };
   ```

2. **Direct Export (Inline):**
   ```javascript
   module.exports = {
       add: function (a, b) { return a + b; }
   };
   ```

3. **Adding Properties One by One:**
   ```javascript
   module.exports.add = function (a, b) { return a + b; };
   ```

4. **Using exports Shorthand:**
   ```javascript
   exports.add = function (a, b) { return a + b; };
   ```
