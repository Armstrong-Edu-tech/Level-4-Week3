const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set status code to OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, this is my first HTTP server!');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});