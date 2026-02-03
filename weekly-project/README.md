# Weekly Project – Simple Command-Line Utility

This folder contains the main Week 3 project: a Node.js command-line tool that displays system information and performs calculations using custom modules. The project combines core Node.js modules (`os` and `fs`) with a custom utility module to create a functional CLI application.

## What it does

**index.js:**
- Uses the `os` module to retrieve system information:
  - Platform (operating system)
  - Total memory
  - Free memory
- Uses the `fs` module to:
  - Write system information to a log file (`log.txt`)
  - Append calculation results to the same log file
- Imports the custom `utils` module to perform calculations:
  - Temperature conversion (Celsius to Fahrenheit)
  - Area calculation (length × width)
- Displays all information in the console
- Writes a summary to `log.txt` file

**utils.js:**
- Custom module with two utility functions:
  - `celsiusToFahrenheit(celsius)` – Converts Celsius temperature to Fahrenheit
  - `calculateArea(length, width)` – Calculates the area of a rectangle
- Exports both functions using `module.exports`

**log.txt:**
- Output file that contains:
  - System information (platform, total memory, free memory)
  - Calculation results (temperature conversion and area calculation)
- This file is created/updated when you run the application

## Installation

```bash
cd weekly-project
npm install
```

## Running the Application

```bash
node index.js
```

After running, you will see:
1. **Console output:**
   - System information (platform, total memory, free memory)
   - Calculation results (30°C in Fahrenheit, area of 5×10)
   - Success messages for file operations

2. **log.txt file:**
   - Contains the same information written to the file
   - Can be opened and viewed in any text editor

## Project Structure

```
weekly-project/
├── index.js      # Main application script
├── utils.js      # Custom utility module
├── log.txt       # Output log file (generated)
└── package.json  # Node.js project configuration
```

## Key Concepts Demonstrated

This project reinforces:
- **Core modules:**
  - `os` module for system information
  - `fs` module for file operations (writeFile, appendFile)
- **Custom modules:**
  - Creating a reusable utility module
  - Exporting functions with `module.exports`
  - Importing custom modules with `require()`
- **File operations:**
  - Writing data to files
  - Appending data to existing files
  - Error handling for file operations
- **Command-line applications:**
  - Running Node.js scripts from the terminal
  - Displaying output in the console
  - Interacting with the file system

## Project Objectives

By completing this project, you will:
- ✅ Develop a command-line utility using Node.js
- ✅ Work with core Node.js modules (`fs` and `os`) to fetch system information
- ✅ Create custom modules that perform simple calculations
- ✅ Write output to both the terminal and a file
- ✅ Interact with the system via the command line

## Files Explained

### index.js
The main entry point that:
1. Retrieves system information using the `os` module
2. Writes system info to `log.txt` using `fs.writeFile()`
3. Imports and uses the custom `utils` module
4. Performs calculations (temperature conversion and area calculation)
5. Appends calculation results to `log.txt` using `fs.appendFile()`
6. Displays all information in the console

### utils.js
Custom module containing:
- `celsiusToFahrenheit(celsius)` – Converts Celsius to Fahrenheit using the formula: `(celsius × 9/5) + 32`
- `calculateArea(length, width)` – Calculates rectangle area: `length × width`

### log.txt
Generated output file containing:
- System platform information
- Memory details (total and free)
- Temperature conversion result (30°C = ?°F)
- Area calculation result (5 × 10 = ?)

## Error Handling

The application includes basic error handling:
- File write errors are caught and logged to the console
- File append errors are caught and logged to the console

## Extending the Project

You can extend this project by:
- Adding more system information (CPU details, network interfaces, uptime)
- Creating additional utility functions (unit conversions, mathematical operations)
- Adding command-line arguments to make calculations dynamic
- Creating a more structured log format (JSON, CSV)
- Adding more sophisticated error handling and validation

## Additional Notes

- **Terminal Commands:** This project teaches how to run Node.js applications via the terminal using `node index.js`
- **File System Interaction:** Students learn how Node.js can read from and write to the file system
- **Modular Code:** The project demonstrates how to organize code into reusable modules
- **System Integration:** Shows how Node.js can interact with the operating system to retrieve system information
