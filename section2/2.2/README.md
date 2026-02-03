# Topic 2.2 – HTTP Module

This folder demonstrates how to create a basic HTTP server using Node.js's built-in `http` module. You will learn how to handle HTTP requests and send responses to clients.

## What it does

**index.js:**
- Creates a simple HTTP server using `http.createServer()`
- Handles requests and sends a "Hello World!" response
- Listens on port 3000

**server.js:**
- Creates an HTTP server with more detailed response handling
- Sets status code (200) and content type header
- Sends a custom message to the client
- Logs server status to the console

## Installation

```bash
cd section2/2.2
npm install
```

**Optional: Install nodemon for auto-restart**
If you want the server to automatically restart when you make changes to your code, install nodemon:
```bash
npm install --save-dev nodemon
```

## Running the Server

**Option 1: Run index.js**
```bash
node index.js
```

**Option 2: Run server.js**
```bash
node server.js
```

**Option 3: Using nodemon (if installed)**
```bash
nodemon index.js
# or
nodemon server.js
```
With nodemon, the server will automatically restart whenever you save changes to your files.

After running either script, the server will start and listen on port 3000. Open your browser and navigate to:

```
http://localhost:3000
```

You should see the server's response message displayed in your browser.

## Key Concepts

- **http.createServer()** – Creates an HTTP server instance
- **Request/Response handling** – Understanding `req` and `res` parameters
- **res.statusCode** – Setting HTTP status codes
- **res.setHeader()** – Setting response headers (e.g., Content-Type)
- **res.end()** – Sending the response and closing the connection
- **server.listen()** – Starting the server on a specific port

## Files

- `index.js` – Basic HTTP server example
- `server.js` – HTTP server with status codes and headers
- `package.json` – Node.js project configuration
