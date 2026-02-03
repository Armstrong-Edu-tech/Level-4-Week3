# Topic 2.4 – Working with OS Module

This folder demonstrates how to use Node.js's built-in `os` module to retrieve system information such as platform, memory, CPU details, network interfaces, and more.

## What it does

**index.js:**
- Retrieves and displays various system information using the `os` module
- Shows CPU architecture, cores, memory (free and total), home directory
- Displays hostname, network interfaces, platform, OS release, uptime, and OS type
- All information is logged to the console

## Installation

```bash
cd section2/2.4
npm install
```

## Running the Script

```bash
node index.js
```

The script will display all system information in the terminal.

## Key Concepts

- **os.arch()** – Returns the CPU architecture
- **os.cpus()** – Returns an array of CPU/core information
- **os.freemem()** – Returns the amount of free system memory in bytes
- **os.totalmem()** – Returns the total amount of system memory in bytes
- **os.homedir()** – Returns the current user's home directory
- **os.hostname()** – Returns the hostname of the operating system
- **os.networkInterfaces()** – Returns network interface information
- **os.platform()** – Returns the operating system platform
- **os.release()** – Returns the operating system release
- **os.uptime()** – Returns the system uptime in seconds
- **os.type()** – Returns the operating system type

## Files

- `index.js` – Demonstrates various OS module functions
- `package.json` – Node.js project configuration
