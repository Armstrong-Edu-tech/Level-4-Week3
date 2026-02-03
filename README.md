# Armstrong Level 4 – Week 3: Getting Started with Node.js

This repository contains multiple small Node.js topics organized into sections (section2, section3) plus a larger weekly-project. All examples focus on Node.js fundamentals, including core modules (http, fs, os), custom modules, and building a command-line utility.

**Prerequisites:** Node.js (v18+ recommended) and npm installed.

**Install dependencies:** Run `npm install` inside each topic folder before running scripts the first time.

**Run scripts:** From that topic folder, use `node <filename>.js` (e.g., `node index.js` or `node app.js`).

**Optional: Using nodemon for Development**
For HTTP servers (topics 2.2 and 2.5), you may want to install `nodemon` to automatically restart the server when you make changes to your code:
```bash
npm install -g nodemon
# or locally in a project folder:
npm install --save-dev nodemon
```
Then use `nodemon <filename>.js` instead of `node <filename>.js` to run your server with auto-restart functionality.

## Folders

### section2: Core Modules in Node.js
Core Node.js built-in modules for HTTP servers, file operations, and system information.

- **2.2** – HTTP Module: Creating basic HTTP servers with request/response handling
- **2.3** – File System (fs) Module: Reading and writing files (async and sync methods)
- **2.4** – OS Module: Retrieving system information (platform, memory, CPU)
- **2.5** – Practical Activity: Combining http, fs, and os modules in a single application

### section3: Custom Modules in Node.js
Creating, exporting, and importing custom modules to organize and reuse code.

- **3.1** – Creating Custom Modules: Defining functions and exporting them with `module.exports`
- **3.2** – Importing and Working with Custom Modules: Using `require()` to import and use custom modules
- **3.3** – Practical Activity: Building a simple custom module (square calculations) and using it in a main script

### weekly-project: Simple Command-Line Utility
The weekly-project folder contains the main Week 3 project, a Node.js command-line tool that displays system information and performs calculations using custom modules.

**What it does:**
- Uses the `os` module to retrieve platform and memory information
- Uses the `fs` module to write system info and calculation results to a log file
- Creates a custom utility module (`utils.js`) with temperature conversion and area calculation functions
- Combines all modules in a single `index.js` script that runs from the command line

**Structure:**
- `index.js` – Main script that imports modules, displays system info, performs calculations, and writes to a log file
- `utils.js` – Custom module with `celsiusToFahrenheit()` and `calculateArea()` functions
- `log.txt` – Output file containing system information and calculation results

**Getting Started (Weekly Project):**
1. Install dependencies:
   ```bash
   cd weekly-project
   npm install
   ```
2. Run the application:
   ```bash
   node index.js
   ```
3. Check the output:
   - View console output for system information and calculation results
   - Check `log.txt` for the saved information

This week's content introduces students to Node.js runtime, core modules, and the module system, providing a foundation for backend web development.
