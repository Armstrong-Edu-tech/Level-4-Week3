# Topic 3.3 – Practical Activity: Building a Simple Custom Module

This folder contains a practical activity where you create a custom module for square calculations and use it in a main application. This reinforces the concepts of creating custom modules, exporting functions, and importing them in other files.

## What it does

**square.js:**
- Custom module that defines two functions:
  - `getArea(side)` – Calculates the area of a square (side × side)
  - `getPerimeter(side)` – Calculates the perimeter of a square (4 × side)
- Exports both functions using `module.exports = { getArea, getPerimeter }`

**app.js:**
- Imports the custom `square` module using `require('./square')`
- Uses the imported functions to calculate area and perimeter for a square with side length 5
- Displays the results in the console

## Installation

```bash
cd section3/3.3
npm install
```

## Running the Script

```bash
node app.js
```

You should see output like:
```
Square Area: 25
Square Perimeter: 20
```

## Key Concepts

This activity reinforces:
- **Creating custom modules** – Defining related functions in a separate file
- **Exporting functions** – Using `module.exports` to make functions available to other files
- **Importing custom modules** – Using `require()` to load the module
- **Using imported functions** – Calling functions that were defined in another module
- **Code organization** – Separating functionality into logical modules

## Files

- `square.js` – Custom module with square calculation functions (`getArea`, `getPerimeter`)
- `app.js` – Main script that imports and uses the square module
- `package.json` – Node.js project configuration

## Activity Goals

By completing this activity, you will:
- Understand how to structure code into reusable modules
- Practice exporting functions from a custom module
- Learn how to import and use custom modules in your applications
- Gain experience with organizing code for better maintainability

## Extending the Activity

You can extend this activity by:
- Adding more geometric calculation functions (rectangle, circle, triangle)
- Creating additional modules for different types of calculations
- Combining multiple custom modules in a single application
