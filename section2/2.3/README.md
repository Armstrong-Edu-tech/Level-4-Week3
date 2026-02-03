# Topic 2.3 – File System (fs) Module

This folder demonstrates how to work with the File System (`fs`) module in Node.js. You will learn how to read files, write files, and append content to files using both asynchronous and synchronous methods.

## What it does

This topic is divided into two subfolders:

### Reading Files
**index.js:**
- Demonstrates asynchronous file reading using `fs.readFile()` with a callback
- Demonstrates synchronous file reading using `fs.readFileSync()`
- Reads from `file1.txt` (async) and `file2.txt` (sync)
- Handles errors appropriately

### Writing and Appending to Files
**index.js:**
- Writes content to a file using `fs.writeFile()` (asynchronous)
- Appends additional content to the file using `fs.appendFile()`
- Creates/updates `output.txt` with the written and appended content
- Includes error handling for both operations

## Installation

**For Reading Files:**
```bash
cd section2/2.3/Reading\ Files
npm install
```

**For Writing and Appending:**
```bash
cd section2/2.3/Writing\ and\ Appending\ to\ Files
npm install
```

## Running the Scripts

**Reading Files:**
```bash
cd section2/2.3/Reading\ Files
node index.js
```

**Writing and Appending:**
```bash
cd section2/2.3/Writing\ and\ Appending\ to\ Files
node index.js
```

After running the writing script, check the `output.txt` file to see the results.

## Key Concepts

- **fs.readFile()** – Asynchronously reads a file (non-blocking)
- **fs.readFileSync()** – Synchronously reads a file (blocking)
- **fs.writeFile()** – Asynchronously writes content to a file (overwrites existing content)
- **fs.appendFile()** – Asynchronously appends content to a file
- **Error handling** – Using callbacks to handle file operation errors
- **File encoding** – Using 'utf8' encoding for text files

## Files

### Reading Files folder:
- `index.js` – Demonstrates reading files (async and sync)
- `file1.txt` – Sample text file for async reading
- `file2.txt` – Sample text file for sync reading
- `package.json` – Node.js project configuration

### Writing and Appending folder:
- `index.js` – Demonstrates writing and appending to files
- `output.txt` – Generated output file (created after running the script)
- `package.json` – Node.js project configuration
