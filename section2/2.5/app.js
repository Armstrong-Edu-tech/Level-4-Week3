const http = require('http');
const fs = require('fs');
const os = require('os');
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error reading file.');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            // Add system information from os module
            const systemInfo = `
            Platform: ${os.platform()}
            Free memory: ${os.freemem()} bytes
            `;
            res.end(`${data}\n\n--- System Info ---\n${systemInfo}`);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});