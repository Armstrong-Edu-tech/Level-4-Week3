const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error reading file.');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
