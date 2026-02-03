# Topic 2.5 – Practical Activity: Working with Node.js Modules

This folder contains a practical activity that combines multiple Node.js core modules (`http`, `fs`, and `os`) in a single application. You will create an HTTP server that reads a text file and displays system information.

## What it does

**app.js:**
- Creates an HTTP server using the `http` module
- Uses the `fs` module to read a text file (`message.txt`) asynchronously
- Uses the `os` module to retrieve system information (platform and free memory)
- Combines the file content with system information in the HTTP response
- Handles errors appropriately (e.g., if the file cannot be read)
- Server listens on port 3000

When you access the server in a browser, it will:
1. Read the content from `message.txt`
2. Retrieve system information (platform and free memory)
3. Display both the file content and system information in the response

## Installation

```bash
cd section2/2.5
npm install
```

**Optional: Install nodemon for auto-restart**
If you want the server to automatically restart when you make changes to your code, install nodemon:
```bash
npm install --save-dev nodemon
```

## Running the Server

**Using node:**
```bash
node app.js
```

**Using nodemon (if installed):**
```bash
nodemon app.js
```
With nodemon, the server will automatically restart whenever you save changes to your files, which is helpful during development.

The server will start and listen on port 3000. You should see:
```
Server running at http://localhost:3000/
```

Open your browser and navigate to:
```
http://localhost:3000
```

You should see the content from `message.txt` along with system information displayed in your browser.

## Key Concepts

This activity reinforces:
- **Combining multiple core modules** – Using `http`, `fs`, and `os` together
- **Asynchronous file operations** – Reading files within an HTTP request handler
- **Error handling** – Properly handling file read errors in a server context
- **HTTP response composition** – Combining different data sources in a single response
- **System integration** – Using Node.js to interact with both the file system and operating system

## Files

- `app.js` – Main application combining http, fs, and os modules
- `message.txt` – Sample text file that will be read and displayed
- `package.json` – Node.js project configuration

## Activity Goals

By completing this activity, you will:
- Understand how to combine multiple Node.js core modules
- Practice creating HTTP servers that interact with the file system
- Learn how to display system information in web responses
- Gain experience with error handling in asynchronous operations
