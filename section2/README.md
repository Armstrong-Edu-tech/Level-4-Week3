# Section 2 – Core Modules in Node.js

This section focuses on Node.js built-in (core) modules that provide essential functionality for server-side development. Each subfolder demonstrates a different core module, progressing from HTTP servers to file operations and system information.

**Prerequisites:** Node.js and npm installed.

**Install dependencies:** Run `npm install` inside each subfolder.

**Run scripts:** From each subfolder, use `node <filename>.js` (e.g., `node index.js` or `node server.js`).

**Optional: Using nodemon for HTTP Servers**
For HTTP server topics (2.2 and 2.5), you may want to install `nodemon` to automatically restart the server when you make changes:
```bash
npm install --save-dev nodemon
```
Then use `nodemon <filename>.js` instead of `node <filename>.js` for automatic restarts during development.

## Folders

### 2.2 – HTTP Module
Creating a basic HTTP server using the `http` module to handle requests and send responses.

### 2.3 – File System (fs) Module
Reading and writing files using the `fs` module, including both asynchronous and synchronous methods.

### 2.4 – OS Module
Retrieving system information such as platform, memory, CPU details, and network interfaces using the `os` module.

### 2.5 – Practical Activity: Working with Node.js Modules
Combining multiple core modules (http, fs, os) in a single application to create an HTTP server that reads a file and displays system information.
